export const id = 28;
export const ids = [28];
export const modules = {
  8803: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => bD,
      f: () => PD,
      j: () => CD
    });
    var pD = wD(58),
      sD = wD(4562),
      KD = wD(1127),
      rD = wD(1442),
      LD = wD(25),
      cD = wD(3430),
      gD = wD(2204),
      RD = wD(1245),
      AD = wD(2560),
      UD = wD(1925),
      fD = wD(1973),
      ID = wD(1200),
      BD = wD(20),
      GD = wD(1648),
      hD = wD(1044),
      nD = wD.n(hD),
      MD = wD(8808),
      OD = wD(8810),
      JD = wD(8816),
      ED = wD(8723),
      QD = wD(8824),
      XD = (wD(8826), wD(1096));
    let VD = null;

    function PD() {
      return null !== VD
    }

    function CD() {
      return "pad" === VD
    }

    function xD() {
      return "inGame" === BD.e.get("gameState") && !(0, GD.q)()
    }

    function TD(DD) {
      return (0, OD.t)(DD, RD.j, OD.f, OD.j, OD.m)
    }
    const bD = (0, pD.memo)((function() {
      const {
        t: DD
      } = (0, ID.E)(), {
        userContext: zD
      } = (0, KD.c)(), [wD, BD] = (0, pD.useState)(null), [hD, PD] = (0, pD.useState)(null), CD = (0, pD.useRef)(null), bD = (0, pD.useCallback)((DD => {
        CD.current = DD, PD(DD)
      }), []), jD = (0, pD.useRef)(0), dD = (0, pD.useRef)(null), SD = (0, pD.useRef)({
        x: 0,
        y: 0
      }), [iD, lD] = (0, pD.useState)(0), WD = (0, pD.useMemo)((() => function(DD) {
        const zD = [];
        for (let pD = 0; pD < RD.j; pD++) {
          var wD;
          zD.push(null !== (wD = DD[pD]) && void 0 !== wD ? wD : null)
        }
        return zD
      }((0, AD.g)(zD.getPlayerCosmetics().emote))), [zD, iD]);
      (0, fD.c)("cosmeticsUpdated", (DD => {
        DD.some((DD => DD.local && "emote" === DD.Pp)) && lD((DD => DD + 1))
      }));
      const ND = (0, pD.useRef)(!1),
        ZD = (0, pD.useCallback)((function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === DD && (0, JD.f)(), ND.current = zD, SD.current = {
            x: 0,
            y: 0
          }, bD(null), BD(DD)
        }), [bD]),
        yD = (0, pD.useCallback)((() => {
          BD(null), bD(null), SD.current = {
            x: 0,
            y: 0
          }
        }), [bD]),
        kD = (0, pD.useCallback)((DD => {
          if (Date.now() < jD.current) return;
          const zD = (0, gD.m)(DD),
            wD = !!zD.holdUntilMove,
            pD = wD ? 600 : Math.ceil(1e3 * zD.animation.animation_length / gD.e) + 200;
          jD.current = Date.now() + pD, dD.current = DD, UD.gameBridge.send("playEmote", DD), UD.gameBridge.send("applyTemporaryThirdPerson", wD ? {} : {
            durationMs: pD
          })
        }), []);
      (0, rD.g)("requestToggleEmoteWheel", (() => {
        null === wD ? xD() && ZD("click") : yD()
      })), (0, rD.g)("requestEmoteWheelHoldOpen", (() => {
        null === wD && xD() && ZD((0, MD.c)() ? "hold" : "click")
      })), (0, rD.g)("requestEmoteWheelPadOpen", (DD => {
        null !== wD || !xD() || (0, ED.e)() || (0, QD.p)() || ZD("pad", DD)
      })), (0, rD.g)("requestEmoteRepeatLast", (() => {
        if (null !== wD || !xD() || (0, ED.e)() || (0, QD.p)()) return;
        const DD = dD.current;
        null !== DD && WD.includes(DD) ? kD(DD) : ZD("pad", !0)
      }));
      const mD = () => {
        const DD = CD.current,
          zD = null !== DD ? WD[DD] : null;
        null !== zD && "pad" === wD && Date.now() < jD.current || (yD(), null !== zD && kD(zD))
      };
      (0, rD.g)("emoteWheelPadAim", (DD => {
        if ("pad" !== wD) return;
        const zD = (0, OD.C)(DD, RD.j, CD.current);
        bD(null !== zD && null !== WD[zD] ? zD : null)
      })), (0, rD.g)("requestEmoteWheelPadCommit", (DD => {
        "pad" !== wD || DD && ND.current || mD()
      })), (0, rD.g)("appManagerUpdated|activeInputDevice", (DD => {
        null !== wD && "pad" === wD !== ("gamepad" === DD) && yD()
      })), (0, pD.useLayoutEffect)((() => (VD = wD, (0, cD.v)("emoteWheel", "pad" === wD), LD.l.KG(cD.o), () => {
        VD = null, (0, cD.v)("emoteWheel", !1), LD.l.KG(cD.o)
      })), [wD]), (0, rD.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === wD && mD()
      })), (0, rD.g)("requestEmoteWheelClose", (() => {
        null !== wD && yD()
      })), (0, rD.g)("appManagerUpdated|gameState", (DD => {
        "inGame" !== DD && yD()
      }));
      const eD = () => {
        (0, GD.q)() && yD()
      };
      if ((0, rD.g)("appManagerUpdated|openEverythingMenuName", eD), (0, rD.g)("appManagerUpdated|openInGameMenuName", eD), (0, rD.g)("pointerLockUpdate", (DD => {
          DD || "hold" !== wD || yD()
        })), (0, pD.useEffect)((() => {
          if (null === wD) return;
          const DD = DD => {
            "Escape" === DD.key && (DD.stopImmediatePropagation(), DD.preventDefault(), yD())
          };
          return document.addEventListener("keydown", DD, !0), () => {
            document.removeEventListener("keydown", DD, !0)
          }
        }), [wD, yD]), (0, sD.e)(!0, "click" === wD, "EmoteWheelOverlay"), (0, pD.useEffect)((() => {
          if ("hold" === wD) return UD.gameBridge.send("holdEmoteWheel", !0), () => {
            UD.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [wD]), (0, pD.useEffect)((() => {
          if ("hold" !== wD) return;
          const DD = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            zD = OD.s * DD,
            pD = OD.p * DD,
            sD = DD => {
              let wD = SD.current.x + DD.movementX,
                sD = SD.current.y + DD.movementY;
              const KD = Math.hypot(wD, sD);
              if (KD > zD) {
                const DD = zD / KD;
                wD *= DD, sD *= DD
              }
              SD.current = {
                x: wD,
                y: sD
              }, bD(function(DD, zD, wD, pD) {
                if (Math.hypot(DD, zD) < wD) return null;
                const sD = (0, OD.u)(DD, zD, RD.j);
                return null === pD[sD] ? null : sD
              }(wD, sD, pD, WD))
            };
          return document.addEventListener("mousemove", sD), () => {
            document.removeEventListener("mousemove", sD)
          }
        }), [wD, WD, bD]), null === wD) return null;
      const oD = "hold" === wD || "pad" === wD,
        aD = null !== hD ? WD[hD] : null,
        uD = null !== aD ? (0, gD.m)(aD).displayName : DD("emotes:pickEmote");
      return (0, XD.jsx)("div", {
        className: nD()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === wD
        }),
        onMouseDown: DD => {
          DD.target === DD.currentTarget && yD()
        },
        children: (0, XD.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * OD.s + "rem",
            height: 2 * OD.s + "rem"
          },
          children: [(0, XD.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${OD.n} ${OD.n}`,
            children: [WD.map(((zD, wD) => {
              const pD = null !== zD,
                sD = oD && wD === hD;
              return (0, XD.jsx)("path", {
                d: TD(wD),
                className: nD()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: sD,
                  EmoteWheelWedgeDisabled: !pD
                }),
                onClick: DD => {
                  DD.stopPropagation(), null !== zD && (DD => {
                    yD(), kD(DD)
                  })(zD)
                },
                "aria-label": null !== zD ? (0, gD.m)(zD).displayName : DD("emotes:emptySlot")
              }, wD)
            })), (0, XD.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: OD.f,
              cy: OD.f,
              r: OD.m
            }), (0, XD.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: OD.f,
              cy: OD.f,
              r: OD.j
            }), oD && null !== hD && (0, XD.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: TD(hD)
            })]
          }), WD.map(((DD, zD) => {
            const wD = null !== DD,
              pD = oD && zD === hD,
              sD = (0, OD.v)(zD, RD.j),
              KD = OD.c * Math.cos(sD),
              rD = OD.c * Math.sin(sD);
            return (0, XD.jsx)("div", {
              className: nD()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: pD,
                EmoteWheelSlotIconDisabled: !wD
              }),
              style: {
                left: `calc(50% + ${KD}rem)`,
                top: `calc(50% + ${rD}rem)`,
                backgroundImage: wD ? `url(/textures/charSkins/previews/emote_${DD}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, zD)
          })), (0, XD.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: uD
          })]
        })
      })
    }))
  },
  5021: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID,
      c: () => MD,
      e: () => BD,
      g: () => nD
    });
    var pD = wD(58),
      sD = wD(5026),
      KD = wD(4395),
      rD = wD(1366),
      LD = wD(5049),
      cD = wD(1044),
      gD = wD.n(cD),
      RD = wD(1355),
      AD = wD(1737),
      UD = wD(5057),
      fD = wD(1096);

    function ID(DD) {
      let {
        label: zD,
        onClick: wD,
        checked: pD,
        circleInfoText: sD,
        className: LD,
        disabled: cD,
        note: RD
      } = DD;
      return (0, fD.jsxs)("div", {
        "aria-disabled": cD || void 0,
        "data-pad-focusable": !0,
        className: gD()("SettingBox CheckboxContainer", {
          [LD]: LD,
          SettingBoxDisabled: cD
        }),
        onClick: () => {
          cD || wD(!pD)
        },
        children: [(0, fD.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, fD.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, fD.jsx)(KD.d, {
              className: "SettingsCheckbox",
              checked: pD,
              disabled: cD,
              onChange: () => {}
            })
          }), (0, fD.jsxs)("div", {
            className: "CheckboxText",
            children: [zD, sD && (0, fD.jsx)("span", {
              onClick: DD => DD.stopPropagation(),
              children: (0, fD.jsx)(rD.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: sD
              })
            })]
          })]
        }), RD && (0, fD.jsx)("div", {
          className: "SettingNote",
          children: RD
        })]
      })
    }

    function BD(DD) {
      let {
        name: zD,
        onChange: wD,
        min: sD,
        max: KD,
        step: LD,
        initValue: cD,
        circleInfoText: RD,
        format: AD,
        className: UD,
        padStep: ID,
        disabled: BD = !1,
        selectableMax: GD,
        cappedNote: nD,
        onChangeComplete: MD
      } = DD;
      const [OD, JD] = (0, pD.useState)(cD), ED = (0, pD.useRef)(cD);
      (0, pD.useEffect)((() => {
        ED.current = cD, JD(cD)
      }), [cD]);
      const QD = void 0 !== GD && GD < KD,
        XD = QD ? {
          "--slider-selectable": (GD - sD) / (KD - sD)
        } : void 0;
      return (0, fD.jsxs)("div", {
        className: gD()("SettingBox SettingsSliderDiv", {
          [UD]: UD,
          SettingBoxDisabled: BD,
          SliderCapped: QD
        }),
        style: XD,
        children: [(0, fD.jsxs)("div", {
          className: "SliderText",
          children: [`${zD}: ${AD?AD(OD):OD}`, RD && (0, fD.jsx)(rD.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: RD
          })]
        }), (0, fD.jsx)("div", {
          className: "SliderDiv",
          children: (0, fD.jsx)(hD, {
            value: OD,
            min: sD,
            max: KD,
            step: LD,
            onChange: DD => {
              if (QD && DD >= GD && OD === GD) return;
              const zD = QD ? Math.min(DD, GD) : DD;
              ED.current = zD, JD(zD), wD(zD)
            },
            onChangeComplete: MD && (() => {
              MD(ED.current)
            }),
            format: AD,
            padStep: ID,
            disabled: BD
          })
        }), QD && nD && (0, fD.jsx)("div", {
          className: "SettingNote",
          children: nD
        })]
      })
    }
    const GD = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function hD(DD) {
      var zD;
      let {
        value: wD,
        min: KD,
        max: rD,
        step: LD,
        onChange: cD,
        orientation: gD,
        reverse: RD,
        setIsChanging: AD,
        tooltip: ID,
        labels: BD,
        handleLabel: hD,
        format: nD,
        onChangeStart: MD,
        onChangeComplete: OD,
        padStep: JD,
        disabled: ED = !1
      } = DD;
      const QD = (0, pD.useRef)(null),
        XD = (0, pD.useRef)(null);
      (0, pD.useLayoutEffect)((() => {
        var DD, zD, wD;
        const pD = null !== (DD = null === (zD = QD.current) || void 0 === zD ? void 0 : zD.querySelector(".rangeslider")) && void 0 !== DD ? DD : null;
        null === pD || void 0 === pD || pD.setAttribute("data-pad-slider", ""), null === pD || void 0 === pD || pD.setAttribute("data-pad-focusable", ""), null === pD || void 0 === pD || null === (wD = pD.querySelector(".rangeslider__handle")) || void 0 === wD || wD.setAttribute("data-pad-slider-handle", ""), XD.current = pD
      }), []), (0, pD.useLayoutEffect)((() => {
        var DD, zD;
        ED ? null === (DD = XD.current) || void 0 === DD || DD.setAttribute("aria-disabled", "true") : null === (zD = XD.current) || void 0 === zD || zD.removeAttribute("aria-disabled")
      }), [ED]);
      const VD = (null !== (zD = String(LD).split(".")[1]) && void 0 !== zD ? zD : "").length,
        PD = DD => {
          const zD = Number((Math.round((DD - KD) / LD) * LD + KD).toFixed(VD));
          return Math.min(rD, Math.max(KD, zD))
        },
        CD = (0, pD.useRef)(OD);
      CD.current = OD, (0, pD.useEffect)((() => {
        const DD = QD.current;
        if (!DD) return;
        const zD = DD => {
          var zD;
          GD.has(DD.key) && (null === (zD = CD.current) || void 0 === zD || zD.call(CD))
        };
        return DD.addEventListener("keyup", zD), () => {
          DD.removeEventListener("keyup", zD)
        }
      }), []);
      const xD = (0, pD.useRef)(!1);
      return (0, UD.c)(XD, {
        adjust: DD => {
          if (ED) return;
          const zD = null !== JD && void 0 !== JD ? JD : Math.max(LD, Math.round((rD - KD) / 20 / LD) * LD),
            pD = PD(wD + DD * zD * (RD ? -1 : 1));
          pD !== wD && (null === MD || void 0 === MD || MD(), cD(pD), null === OD || void 0 === OD || OD())
        },
        setFraction: DD => {
          if (ED) return;
          const zD = PD(KD + (RD ? 1 - DD : DD) * (rD - KD));
          zD !== wD && (xD.current || (xD.current = !0, null === MD || void 0 === MD || MD()), cD(zD))
        },
        endDrag: () => {
          xD.current && (xD.current = !1, null === OD || void 0 === OD || OD())
        }
      }), (0, fD.jsx)("div", {
        ref: QD,
        style: {
          display: "contents"
        },
        children: (0, fD.jsx)(sD.c, {
          value: wD,
          min: KD,
          max: rD,
          step: LD,
          onChange: cD,
          orientation: gD,
          reverse: RD,
          tooltip: ID,
          labels: BD,
          handleLabel: hD,
          format: nD,
          onChangeStart: () => {
            null === MD || void 0 === MD || MD(), null === AD || void 0 === AD || AD(!0)
          },
          onChangeComplete: () => {
            null === AD || void 0 === AD || AD(!1), null === OD || void 0 === OD || OD()
          }
        })
      })
    }
    async function nD() {
      const DD = RD.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await DD.getResult() && (0, AD.reloadBloxd)()
    }

    function MD(DD) {
      let {
        label: zD,
        options: wD,
        value: pD,
        onChange: sD,
        circleInfoText: KD
      } = DD;
      return (0, fD.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, fD.jsxs)("div", {
          className: "SliderText",
          children: [zD, KD && (0, fD.jsx)(rD.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: KD
          })]
        }), (0, fD.jsx)(LD.e, {
          ariaLabel: zD,
          options: wD,
          value: pD,
          onChange: sD
        })]
      })
    }
  },
  5049: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1096);

    function rD(DD) {
      let {
        options: zD,
        value: wD,
        onChange: pD,
        ariaLabel: rD,
        className: LD,
        reselectable: cD = !1,
        keepsFocus: gD = !1,
        padTabs: RD
      } = DD;
      const AD = void 0 !== RD;
      return (0, KD.jsx)("div", {
        className: sD()("SegmentedToggle", LD),
        role: "group",
        "aria-label": rD,
        "data-pad-tabs": RD,
        children: zD.map((DD => {
          const zD = DD.value === wD;
          return (0, KD.jsx)("button", {
            type: "button",
            "aria-pressed": zD,
            "data-pad-tab": AD || void 0,
            "data-pad-selected": AD && zD ? "true" : void 0,
            "data-pad-default-focus": AD && zD || void 0,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: sD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zD
            }),
            onMouseDown: gD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              zD && !cD || pD(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  8796: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      g: () => ID,
      j: () => BD,
      l: () => fD,
      o: () => UD
    });
    var pD = wD(58),
      sD = wD(8801),
      KD = wD(25),
      rD = wD(1925),
      LD = wD(35),
      cD = wD(1268),
      gD = wD(1956);
    const RD = 50;
    const AD = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = DD => {
          if (0 === this.listeners.size) {
            var zD, wD;
            this.state = {
              ...this.state,
              channel: null !== (zD = null === (wD = gD.e.get("chatChannels")) || void 0 === wD ? void 0 : wD[0]) && void 0 !== zD ? zD : null
            };
            const DD = KD.l.subscribe("reportPlayer", (DD => {
              let {
                playerEId: zD
              } = DD;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, zD]
              })
            }));
            this.stopListening = [rD.gameBridge.subscribe("chatReceived", (DD => {
              let {
                serverChatMsgId: zD,
                content: wD,
                author: pD
              } = DD;
              this.addMessage(zD, wD, pD)
            })), () => {
              KD.l.unsubscribe(DD)
            }, gD.e.subscribe("chatChannels", (DD => {
              var zD;
              this.setState({
                ...this.state,
                channel: null !== (zD = null === DD || void 0 === DD ? void 0 : DD[0]) && void 0 !== zD ? zD : null
              })
            }))]
          }
          return this.listeners.add(DD), () => {
            if (this.listeners.delete(DD), 0 === this.listeners.size) {
              for (const DD of this.stopListening) DD();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pD = {
          serverChatMsgId: DD,
          content: zD,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: wD
        };
        this.setState({
          ...this.state,
          messages: [pD, ...this.state.messages].slice(0, sD.f)
        })
      }
      selectNextChannel() {
        const DD = gD.e.get("chatChannels");
        if (DD) {
          const zD = DD.findIndex((DD => {
            var zD;
            return DD.channelName === (null === (zD = this.state.channel) || void 0 === zD ? void 0 : zD.channelName)
          }));
          this.setState({
            ...this.state,
            channel: DD[(zD + 1) % DD.length]
          })
        }
      }
      setState(DD) {
        this.state = DD;
        for (const zD of this.listeners) zD()
      }
    };

    function UD() {
      const [DD, zD] = (0, pD.useState)(AD.getState);
      return (0, pD.useEffect)((() => {
        const DD = AD.subscribe((() => {
          zD(AD.getState())
        }));
        return zD(AD.getState()), DD
      }), []), DD
    }

    function fD(DD) {
      var zD, wD;
      if (DD.startsWith("/report")) {
        var pD;
        const zD = null !== (pD = DD.replace("/report", "").trim().split(" ")[0]) && void 0 !== pD ? pD : "";
        if ("" === zD) return void AD.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const wD = rD.gameBridge.latest("players"),
          sD = rD.gameBridge.latest("hiddenPlayerNames"),
          LD = DD => {
            var pD, KD;
            const rD = null !== (pD = null === (KD = wD.byId[DD]) || void 0 === KD ? void 0 : KD.name) && void 0 !== pD ? pD : null;
            return null !== rD && (rD === zD || (0, cD.e)(rD, sD) === zD)
          };
        if (null !== wD.localId && LD(wD.localId)) return void AD.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const DD of wD.ids)
          if (LD(DD)) return KD.l.KG("OpenReportMenu", {
            playerEId: DD,
            playerName: wD.byId[DD].name,
            lg: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        AD.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      rD.gameBridge.send("sendChatMessage", {
          lg: DD,
          channelName: null !== (zD = null === (wD = AD.getState().channel) || void 0 === wD ? void 0 : wD.channelName) && void 0 !== zD ? zD : null
        }),
        function(DD) {
          var zD;
          const wD = null !== (zD = LD.h.getItem("recentlySentChatMsgs")) && void 0 !== zD ? zD : [];
          wD.push(DD), wD.length > RD && wD.shift();
          LD.h.setItem("recentlySentChatMsgs", wD)
        }(DD)
    }

    function ID() {
      var DD;
      return null !== (DD = LD.h.getItem("recentlySentChatMsgs")) && void 0 !== DD ? DD : []
    }

    function BD(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const pD = null !== (zD = LD.h.getItem("recentlySentChatMsgs")) && void 0 !== zD ? zD : [],
        sD = pD.length + 1,
        KD = wD ? (DD % sD + sD) % sD : Math.min(pD.length, Math.max(0, DD));
      return {
        stepsBack: KD,
        text: 0 === KD ? "" : pD[pD.length - KD]
      }
    }
  },
  8756: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      g: () => KD
    });
    var pD = wD(1987);
    const sD = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      KD = DD => "string" === typeof DD.icon && "" !== DD.icon && "string" === typeof DD.keycode && sD.test(DD.keycode),
      rD = DD => "Space" === DD ? "_" : pD.l[DD]
  },
  8808: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(20);

    function sD() {
      return !pD.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8810: (DD, zD, wD) => {
    wD.d(zD, {
      C: () => fD,
      c: () => KD,
      f: () => LD,
      j: () => gD,
      m: () => cD,
      n: () => rD,
      p: () => sD,
      s: () => pD,
      t: () => ID,
      u: () => AD,
      v: () => RD,
      y: () => UD
    });
    const pD = 14,
      sD = 6,
      KD = (pD + sD) / 2,
      rD = 200,
      LD = rD / 2,
      cD = rD / 2 - 1,
      gD = sD / pD * (rD / 2),
      RD = (DD, zD) => -Math.PI / 2 + 2 * DD * Math.PI / zD,
      AD = (DD, zD, wD) => {
        const pD = 2 * Math.PI / wD;
        return (Math.round((Math.atan2(zD, DD) + Math.PI / 2) / pD) % wD + wD) % wD
      },
      UD = .5,
      fD = (DD, zD, wD) => Math.hypot(DD.x, DD.y) < UD ? wD : AD(DD.x, DD.y, zD),
      ID = (DD, zD, wD, pD, sD) => {
        const KD = Math.PI / zD,
          rD = RD(DD, zD),
          LD = rD - KD,
          cD = rD + KD,
          gD = (DD, zD) => `${wD+DD*Math.cos(zD)} ${wD+DD*Math.sin(zD)}`;
        return [`M ${gD(pD,LD)}`, `L ${gD(sD,LD)}`, `A ${sD} ${sD} 0 0 1 ${gD(sD,cD)}`, `L ${gD(pD,cD)}`, `A ${pD} ${pD} 0 0 0 ${gD(pD,LD)}`, "Z"].join(" ")
      }
  },
  8837: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(58),
      sD = wD(8785),
      KD = wD(2402);

    function rD() {
      const DD = (0, KD.h)("shopInfo"),
        [, zD] = (0, pD.useReducer)((DD => DD + 1), 0);
      return (0, KD.g)("shopInfo", zD), !(0, sD.e)(DD)
    }
  },
  8201: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD,
      f: () => UD,
      j: () => AD,
      l: () => gD,
      o: () => LD,
      r: () => pD,
      t: () => fD,
      u: () => ID
    });
    const pD = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      sD = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: pD
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      KD = {
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
      rD = ["pickBlock", "perspective"],
      LD = DD => rD.includes(DD) ? rD : [DD],
      cD = Object.fromEntries(sD.flatMap((DD => {
        let {
          group: zD,
          actions: wD
        } = DD;
        return wD.map((DD => [DD, zD]))
      }))),
      gD = DD => cD[DD],
      RD = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      AD = DD => {
        var zD;
        return [gD(DD), ...null !== (zD = RD[DD]) && void 0 !== zD ? zD : []]
      },
      UD = new Set(["menu", "inventory", "keyboard"]),
      fD = {
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
      ID = new Set(["forward", "backward", "left", "right"])
  },
  8196: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => MD,
      D: () => PD,
      G: () => RD,
      K: () => VD,
      O: () => TD,
      e: () => nD,
      f: () => JD,
      g: () => UD,
      j: () => fD,
      m: () => jD,
      q: () => xD,
      r: () => CD,
      t: () => OD,
      w: () => bD,
      z: () => XD
    });
    var pD = wD(8201),
      sD = wD(8208),
      KD = wD(8184),
      rD = wD(8223);
    const LD = DD => "pickBlock" === DD ? "perspective" : DD,
      cD = (DD, zD) => {
        var wD;
        const sD = LD(zD);
        return null !== (wD = DD[sD]) && void 0 !== wD ? wD : pD.c[sD]
      },
      gD = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((DD => {
        let [zD, wD] = DD;
        return [
          [zD, wD],
          [wD, zD]
        ]
      }))),
      RD = (DD, zD) => null !== DD && void 0 !== DD ? DD : "nintendo" === zD,
      AD = DD => RD((0, sD.g)().swapConfirmBack, (0, sD.j)()) && gD.get(DD) || DD,
      UD = DD => cD((0, sD.g)().bindings, AD(DD)),
      fD = DD => pD.c[AD(DD)],
      ID = Object.keys(pD.c),
      BD = DD => "gameplay" === (0, pD.l)(DD) ? ["gameplay"] : (0, pD.j)(DD),
      GD = (DD, zD) => {
        const wD = BD(zD);
        return BD(DD).some((DD => wD.includes(DD)))
      },
      hD = (DD, zD, wD) => {
        const sD = cD(DD, zD),
          rD = new Set((0, pD.o)(zD)),
          gD = [...rD];
        for (let pD = gD.pop(); pD; pD = gD.pop())
          for (const zD of ID) {
            const KD = cD(DD, zD);
            rD.has(zD) || KD !== wD && KD !== sD || !GD(pD, zD) || (rD.add(zD), gD.push(zD))
          }
        const RD = {
          ...DD
        };
        for (const AD of rD) {
          const zD = cD(DD, AD) === sD ? wD : sD,
            rD = (0, pD.j)(AD).some((DD => pD.f.has(DD)));
          if ((0, KD.B)(zD) && rD) return null;
          RD[LD(AD)] = zD
        }
        for (const KD of Object.keys(RD)) RD[KD] === pD.c[KD] && delete RD[KD];
        return RD
      },
      nD = (DD, zD) => null !== hD((0, sD.g)().bindings, AD(DD), zD),
      MD = (DD, zD) => {
        if (UD(DD) === zD) return !0;
        const wD = hD((0, sD.g)().bindings, AD(DD), zD);
        return !!wD && ((0, sD.l)({
          bindings: wD
        }), !0)
      },
      OD = (DD, zD) => {
        const wD = (0, pD.o)(zD);
        return ID.filter((zD => LD(zD) === zD && !wD.includes(zD) && cD(DD, AD(zD)) !== UD(zD)))
      },
      JD = ["southpaw", "triggersSwapped"],
      ED = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      QD = DD => Object.keys(ED[DD]),
      XD = (DD, zD) => "southpaw" === DD ? zD.swapSticks : QD(DD).every((wD => cD(zD.bindings, wD) === ED[DD][wD])),
      VD = (DD, zD) => {
        const wD = (0, sD.g)();
        let KD = wD.bindings;
        for (const sD of QD(DD)) {
          const wD = zD ? ED[DD][sD] : pD.c[sD];
          if (KD = hD(KD, sD, wD), !KD) return !1
        }
        return (0, sD.l)({
          swapSticks: "southpaw" === DD ? zD : wD.swapSticks,
          bindings: KD
        }), !0
      },
      PD = () => {
        (0, sD.l)({
          swapSticks: !1,
          bindings: {}
        })
      },
      CD = () => (0, sD.g)().swapSticks ? "RightStick" : "LeftStick",
      xD = () => (0, sD.g)().swapSticks ? "LeftStick" : "RightStick",
      TD = DD => (0, sD.g)().swapSticks && (0, KD.B)(DD),
      bD = DD => TD(DD) ? CD() : xD(),
      jD = DD => {
        if (pD.u.has(DD)) return CD();
        const zD = pD.t[DD];
        return zD && ("leaderboard" !== zD || (0, rD.e)(DD, (0, rD.b)())) ? UD(zD) : null
      }
  },
  8172: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ControllerCategory: () => QL,
      ControllerGlyph: () => Vs,
      ControllerRoot: () => Qr,
      PadLobbyShortcuts: () => yr,
      PadSneakChip: () => br,
      PadTooltip: () => dr,
      attachPressToContinue: () => tr,
      getBoundButton: () => RD.g,
      getControllerSettings: () => UD.g,
      getGlyphForNoaAction: () => RD.m,
      getInventoryCursorState: () => VL,
      getMenuShortcutButton: () => aw,
      getPadGlyphIconName: () => Cr,
      getPadGlyphIconUrl: () => xr,
      getPadRepeatTiming: () => BD.d,
      handOverPadFocus: () => CL,
      hasActivePad: () => XL,
      isPadSteppingSlots: () => PL
    });
    const pD = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var sD = wD(1200),
      KD = wD(1394),
      rD = wD(8178),
      LD = wD(79),
      cD = wD(20),
      gD = wD(25),
      RD = wD(8196),
      AD = wD(8226),
      UD = wD(8208),
      fD = wD(8230),
      ID = wD(8184),
      BD = wD(8658),
      GD = wD(8664),
      hD = wD(1681);
    const nD = (DD, zD, wD) => Math.max(zD, Math.min(wD, DD)),
      MD = DD => Math.min(DD.width, DD.height) / 720,
      OD = DD => Math.max(.15, DD);
    class JD {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(DD, zD) {
        const wD = Math.hypot(DD.x, DD.y) >= (DD => Math.max(.3, DD))(zD);
        return this.locked ? (this.locked = wD, !1) : wD
      }
    }
    const ED = (DD, zD) => {
        const wD = nD(zD.dtMs, 0, 100),
          pD = wD / 1e3,
          sD = MD(zD.viewport) * (zD.cursorSpeedPercent / 100),
          KD = (0, ID.i)(zD.stick, OD(zD.moveDeadzone)),
          rD = Math.hypot(KD.x, KD.y),
          LD = ((DD, zD, wD) => {
            if (zD < .3) return 0;
            const pD = wD / 350;
            return zD >= .85 ? Math.min(1, DD + pD) : Math.max(0, DD - pD)
          })(DD.speedRamp, rD, wD);
        let cD = DD.x,
          gD = DD.y;
        if (rD > 0) {
          const DD = .45 + .55 * LD,
            wD = zD.context.overInteractive ? .45 : 1,
            RD = 1400 * (DD => {
              const zD = nD(DD, 0, 1);
              return .3 * zD + .7 * zD * zD
            })(rD) * sD * DD * wD;
          cD += KD.x / rD * RD * pD, gD += KD.y / rD * RD * pD
        }
        const RD = Math.hypot(zD.dpad.x, zD.dpad.y);
        if (RD > 0) {
          const DD = 500 * sD;
          cD += zD.dpad.x / RD * DD * pD, gD += zD.dpad.y / RD * DD * pD
        }
        const AD = zD.context.magnetTarget;
        if (AD && rD < .3 && 0 === RD) {
          const DD = ((DD, zD, wD, pD, sD) => {
            const KD = zD.x - DD.x,
              rD = zD.y - DD.y,
              LD = Math.hypot(KD, rD);
            if (0 === LD) return {
              x: 0,
              y: 0
            };
            const cD = Math.min(LD, sD * (1 - pD / .3));
            let gD = KD / LD * cD,
              RD = rD / LD * cD;
            if (pD > 0) {
              const DD = wD.x / pD,
                zD = wD.y / pD,
                sD = gD * DD + RD * zD;
              sD < 0 && (gD -= sD * DD, RD -= sD * zD)
            }
            return {
              x: gD,
              y: RD
            }
          })({
            x: cD,
            y: gD
          }, AD, KD, rD, 120 * MD(zD.viewport) * pD);
          cD += DD.x, gD += DD.y
        }
        return {
          x: nD(cD, 0, Math.max(0, zD.viewport.width - 1)),
          y: nD(gD, 0, Math.max(0, zD.viewport.height - 1)),
          speedRamp: LD
        }
      },
      QD = DD => {
        const zD = (0, ID.i)(DD, .2);
        return 0 !== zD.x || 0 !== zD.y
      },
      XD = (DD, zD) => {
        const wD = (0, ID.i)(DD, .2),
          pD = Math.hypot(wD.x, wD.y);
        if (0 === pD) return {
          x: 0,
          y: 0
        };
        const sD = pD * pD * 1600,
          KD = nD(zD, 0, 100) / 1e3;
        return {
          x: wD.x / pD * sD * KD,
          y: wD.y / pD * sD * KD
        }
      },
      VD = (DD, zD) => "y" === zD ? DD.scrollHeight > DD.clientHeight + 1 : DD.scrollWidth > DD.clientWidth + 1,
      PD = (DD, zD) => {
        if (!VD(DD, zD)) return !1;
        const wD = getComputedStyle(DD),
          pD = "y" === zD ? wD.overflowY : wD.overflowX;
        return "auto" === pD || "scroll" === pD
      },
      CD = (DD, zD, wD) => {
        for (let KD = DD instanceof HTMLElement ? DD : null !== (pD = null === DD || void 0 === DD ? void 0 : DD.parentElement) && void 0 !== pD ? pD : null; KD; KD = KD.parentElement) {
          var pD;
          if (PD(KD, zD)) return KD;
          if (KD === wD) return null
        }
        if (wD) return null;
        const sD = document.scrollingElement;
        return sD instanceof HTMLElement && VD(sD, zD) ? sD : null
      },
      xD = new WeakMap,
      TD = (DD, zD) => {
        const wD = performance.now(),
          pD = xD.get(DD);
        if (pD && pD.axis === zD && wD - pD.atMs < 500 && (!pD.container || pD.container.isConnected)) return pD.container;
        const sD = bD(DD, zD);
        return xD.set(DD, {
          axis: zD,
          atMs: wD,
          container: sD
        }), sD
      },
      bD = (DD, zD) => {
        let wD = PD(DD, zD) ? DD : null,
          pD = wD ? wD.clientWidth * wD.clientHeight : 0;
        for (const sD of DD.querySelectorAll("*")) {
          const DD = sD.clientWidth * sD.clientHeight;
          DD > pD && PD(sD, zD) && (wD = sD, pD = DD)
        }
        return wD
      },
      jD = (DD, zD, wD) => "y" === zD ? wD < 0 ? DD.scrollTop > 0 : DD.scrollTop + DD.clientHeight < DD.scrollHeight - 1 : wD < 0 ? DD.scrollLeft > 0 : DD.scrollLeft + DD.clientWidth < DD.scrollWidth - 1,
      dD = (DD, zD, wD) => {
        "y" === zD ? DD.scrollBy({
          top: wD,
          behavior: "instant"
        }) : DD.scrollBy({
          left: wD,
          behavior: "instant"
        })
      },
      SD = DD => {
        if (!DD || DD === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const zD = DD.getBoundingClientRect(),
          wD = Math.max(0, zD.left),
          pD = Math.max(0, zD.top);
        return new DOMRect(wD, pD, Math.min(window.innerWidth, zD.right) - wD, Math.min(window.innerHeight, zD.bottom) - pD)
      },
      iD = (DD, zD) => DD.left < zD.right && zD.left < DD.right && DD.top < zD.bottom && zD.top < DD.bottom;
    var lD = wD(58),
      WD = wD(1044),
      ND = wD.n(WD),
      ZD = wD(1096);
    let yD = 0,
      kD = !1;
    class mD {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(DD) {
        this.element = DD, this.shownKey = "", this.gap = null
      }
      show(DD) {
        const zD = this.element;
        if (!zD) return;
        const wD = DD ? this.keepOnScreen(zD, DD) : null,
          pD = wD ? `${wD.left},${wD.top},${wD.width},${wD.height}` : "";
        if (pD === this.shownKey) return;
        const sD = "" === this.shownKey;
        this.shownKey = pD, zD.classList.toggle("Visible", null !== wD), wD && (zD.classList.toggle("Snap", sD), zD.style.width = `${wD.width}px`, zD.style.height = `${wD.height}px`, zD.style.transform = `translate(${wD.left}px, ${wD.top}px)`, sD && (zD.offsetWidth, zD.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(DD, zD) {
        var wD;
        const pD = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!kD){kD=!0;const DD=document.createElement("div");DD.setAttribute("aria-hidden","true"),DD.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(DD),new ResizeObserver((()=>{yD++})).observe(DD)}return String(yD)})()}`;
        (null === (wD = this.gap) || void 0 === wD ? void 0 : wD.key) !== pD && (this.gap = {
          px: parseFloat(getComputedStyle(DD).paddingLeft) || 0,
          key: pD
        });
        const sD = this.gap.px + 2,
          KD = Math.max(zD.left, sD),
          rD = Math.max(zD.top, sD),
          LD = Math.min(zD.left + zD.width, window.innerWidth - sD),
          cD = Math.min(zD.top + zD.height, window.innerHeight - sD);
        return LD <= KD || cD <= rD ? zD : {
          left: KD,
          top: rD,
          width: LD - KD,
          height: cD - rD
        }
      }
    }
    const eD = DD => {
      let {
        placer: zD,
        className: wD
      } = DD;
      const pD = (0, lD.useCallback)((DD => {
        zD.setElement(DD)
      }), [zD]);
      return (0, ZD.jsx)("div", {
        ref: pD,
        className: ND()("PadReticle", wD),
        "aria-hidden": !0
      })
    };
    var oD = wD(8671);
    const aD = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const uD = new class {
      constructor() {
        this.state = aD, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(DD) {
        if (zD = this.state, wD = DD, (zD.visible || wD.visible) && (zD.visible !== wD.visible || zD.x !== wD.x || zD.y !== wD.y || zD.pressed !== wD.pressed)) {
          var zD, wD;
          this.state = DD;
          for (const zD of this.listeners) zD(DD)
        }
      }
      hide() {
        this.set(aD)
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
    };
    var vD = wD(8684);
    const tD = (DD, zD) => {
        let {
          kind: wD,
          holding: pD,
          hasPress: sD,
          hasBack: KD,
          slotHasItem: rD
        } = zD;
        switch (DD) {
          case "primary":
            return "slot" === wD ? "slotPrimary" : "recipe" === wD || "button" === wD ? sD ? "pressPrimary" : "click" : "textField" === wD ? "openKeyboard" : null;
          case "secondary":
            return "slot" === wD ? "slotSecondary" : "button" !== wD && "recipe" !== wD || !sD ? null : "pressSecondary";
          case "quickMove":
            return "slot" === wD && rD ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === wD && rD && !pD ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return pD ? "cancel" : KD ? "pressBack" : "close"
        }
      },
      FD = DD => {
        const zD = [];
        if (DD.hotbarPicking) return zD.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), zD.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), zD;
        if (DD.holding) "slot" === DD.kind ? (zD.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), zD.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === DD.kind && zD.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), zD.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), zD.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), DD.openButtonCloses && zD.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var wD;
          "slot" === DD.kind && DD.slotHasItem ? (zD.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), zD.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), zD.push({
            actions: ["inventoryQuickMove"],
            labelKey: DD.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), zD.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), zD.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== DD.kind && "recipe" !== DD.kind || !DD.pressHints ? "button" === DD.kind || "recipe" === DD.kind ? zD.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === DD.kind && zD.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (DD.pressHints.primary && zD.push({
            actions: ["inventoryPrimary"],
            labelKey: DD.pressHints.primary
          }), DD.pressHints.secondary && zD.push({
            actions: ["inventorySecondary"],
            labelKey: DD.pressHints.secondary
          }));
          const pD = null === (wD = DD.pressHints) || void 0 === wD ? void 0 : wD.back;
          pD && zD.push({
            actions: ["inventoryClose"],
            labelKey: pD
          });
          const sD = [];
          DD.openButtonCloses && sD.push("inventory"), pD || sD.push("inventoryClose"), sD.length > 0 && zD.push({
            actions: sD,
            labelKey: "inventoryClose"
          })
        }
        return zD.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), DD.hasCategories ? zD.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : DD.hasList && zD.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), zD
      };
    var YD = wD(8700),
      HD = wD(8692);
    class qD {
      constructor(DD) {
        this.probes = DD, this.byContainer = new Map, this.byParent = new Map
      }
      find(DD, zD) {
        const wD = CD(DD, "y", zD);
        if (!wD) return null;
        let pD = this.byContainer.get(wD);
        return pD || (this.probes.push({
          element: wD,
          rect: pz(wD.getBoundingClientRect())
        }), pD = {
          container: wD,
          box: SD(wD),
          group: wz(wD)
        }, this.byContainer.set(wD, pD)), pD
      }
      findForParent(DD, zD) {
        let wD = this.byParent.get(DD);
        return void 0 === wD && (wD = this.find(DD, zD), this.byParent.set(DD, wD)), wD
      }
    }
    const Dz = new WeakMap;
    let zz = 0;
    const wz = DD => {
        let zD = Dz.get(DD);
        return zD || (zD = "el:" + zz++, Dz.set(DD, zD)), zD
      },
      pz = DD => ({
        left: DD.left,
        top: DD.top,
        width: DD.width,
        height: DD.height
      }),
      sz = DD => DD.width > 0 && DD.height > 0,
      Kz = (DD, zD) => sz(DD) && DD.left + DD.width > 0 && DD.top + DD.height > 0 && DD.left < zD.width && DD.top < zD.height,
      rz = (DD, zD, wD) => {
        const pD = DD.top + DD.height / 2;
        return Kz(DD, zD) && (!wD || pD >= wD.top && pD <= wD.bottom)
      },
      Lz = DD => ({
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2
      }),
      cz = (DD, zD, wD) => DD < 0 ? wD >= 0 ? 0 : zD - 1 : ((DD + wD) % zD + zD) % zD,
      gz = DD => "Left" === DD || "Right" === DD,
      Rz = (DD, zD, wD) => {
        const pD = gz(wD),
          sD = pD ? DD.top : DD.left,
          KD = pD ? DD.height : DD.width,
          rD = pD ? zD.top : zD.left,
          LD = pD ? zD.height : zD.width,
          cD = Math.max(0, Math.max(rD - (sD + KD), sD - (rD + LD)));
        return KD > 1.5 * LD ? {
          gap: cD,
          offset: Math.max(0, rD - sD) + .1 * Math.max(0, sD - rD)
        } : {
          gap: cD,
          offset: Math.abs(rD + LD / 2 - (sD + KD / 2))
        }
      },
      Az = (DD, zD, wD) => {
        const pD = ((DD, zD, wD) => {
          const pD = Lz(DD),
            sD = Lz(zD),
            KD = gz(wD) ? Math.min(DD.width, zD.width) / 4 : Math.min(DD.height, zD.height) / 4;
          switch (wD) {
            case "Right":
              return sD.x - pD.x >= KD ? Math.max(0, zD.left - (DD.left + DD.width)) : null;
            case "Left":
              return pD.x - sD.x >= KD ? Math.max(0, DD.left - (zD.left + zD.width)) : null;
            case "Down":
              return sD.y - pD.y >= KD ? Math.max(0, zD.top - (DD.top + DD.height)) : null;
            case "Up":
              return pD.y - sD.y >= KD ? Math.max(0, DD.top - (zD.top + zD.height)) : null
          }
        })(DD, zD, wD);
        if (null === pD) return null;
        const sD = Rz(DD, zD, wD);
        return pD + 3 * sD.gap + .5 * sD.offset
      },
      Uz = (DD, zD) => zD.visible || null !== zD.scrollGroup && zD.scrollGroup === DD.scrollGroup,
      fz = (DD, zD, wD, pD) => {
        let sD = null,
          KD = 1 / 0;
        for (const rD of zD) {
          if (rD.key === DD.key || !Uz(DD, rD) || !pD(rD)) continue;
          const zD = Az(DD.rect, rD.rect, wD);
          null !== zD && zD < KD && (sD = rD, KD = zD)
        }
        return sD
      },
      Iz = (DD, zD, wD) => {
        const pD = fz(DD, zD, wD, (() => !0));
        if (!pD || gz(wD) || null === DD.scrollGroup || pD.scrollGroup === DD.scrollGroup) return pD;
        const sD = fz(DD, zD, wD, (zD => 0 === Rz(DD.rect, zD.rect, wD).gap));
        return null !== sD && void 0 !== sD ? sD : pD
      },
      Bz = (DD, zD, wD) => {
        let pD = null,
          sD = 1 / 0;
        for (const KD of zD) {
          if (!KD.visible || wD && !wD(KD)) continue;
          const zD = Lz(KD.rect),
            rD = Math.hypot(zD.x - DD.x, zD.y - DD.y);
          rD < sD && (pD = KD, sD = rD)
        }
        return pD
      },
      Gz = DD => {
        const {
          rect: zD,
          clip: wD
        } = DD;
        if (!wD) return zD;
        const pD = Math.max(zD.left, wD.left),
          sD = Math.max(zD.top, wD.top);
        return {
          left: pD,
          top: sD,
          width: Math.min(zD.left + zD.width, wD.left + wD.width) - pD,
          height: Math.min(zD.top + zD.height, wD.top + wD.height) - sD
        }
      },
      hz = (DD, zD) => zD.x >= DD.left && zD.x < DD.left + DD.width && zD.y >= DD.top && zD.y < DD.top + DD.height,
      nz = (DD, zD) => {
        let wD = null,
          pD = 1 / 0;
        for (const sD of zD) {
          const zD = Gz(sD);
          (sD.visible || sD.clip) && hz(zD, DD) && (zD.width * zD.height < pD && (wD = sD, pD = zD.width * zD.height))
        }
        return wD
      },
      Mz = DD => {
        let zD = null;
        for (const wD of DD) {
          if (!wD.visible) continue;
          if (!zD) {
            zD = wD;
            continue
          }
          const DD = Math.min(zD.rect.height, wD.rect.height) / 2,
            pD = wD.rect.top - zD.rect.top;
          (pD < -DD || Math.abs(pD) <= DD && wD.rect.left < zD.rect.left) && (zD = wD)
        }
        return zD
      },
      Oz = (DD, zD, wD, pD, sD) => {
        const KD = sD % zD,
          rD = Math.floor(sD / zD);
        return {
          left: DD.left + KD * wD,
          top: DD.top + rD * pD,
          width: DD.width,
          height: DD.height
        }
      },
      Jz = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Ez = ".LazyLoadedItemWrapper",
      Qz = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Xz = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Vz = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Pz = DD => DD.hasAttribute("data-inven-idx") ? "slot" : DD.hasAttribute("data-recipe-key") ? "recipe" : DD.hasAttribute("data-craft-ingredient") || (0, HD.u)(DD) ? "info" : (0, oD.K)(DD) ? "textField" : "button",
      Cz = (DD, zD) => "slot" === zD ? Number(DD.getAttribute("data-inven-idx")) : null,
      xz = DD => DD.matches(Ez) ? DD.querySelector(Qz) : DD,
      Tz = DD => {
        var zD, wD;
        return {
          element: DD,
          recipe: null !== (zD = DD && (null === (wD = xz(DD)) || void 0 === wD ? void 0 : wD.getAttribute("data-recipe-key"))) && void 0 !== zD ? zD : null
        }
      },
      bz = DD => {
        const zD = xz(DD);
        if (!zD) return {
          kind: "pending",
          idx: null
        };
        const wD = Pz(zD);
        return {
          kind: wD,
          idx: Cz(zD, wD)
        }
      },
      jz = DD => {
        const zD = [];
        for (const [wD, pD] of Xz) {
          DD.matches(pD) && zD.push([wD, DD]);
          for (const sD of DD.querySelectorAll(pD)) zD.push([wD, sD])
        }
        return zD
      },
      dz = (DD, zD) => {
        for (const [wD, pD] of DD)
          if (pD.contains(zD)) return wD;
        return "other"
      },
      Sz = (DD, zD, wD, pD, sD, KD, rD, LD) => {
        var cD;
        const gD = DD.children,
          RD = pz(gD[0].getBoundingClientRect()),
          AD = [{
            element: gD[0],
            rect: RD
          }];
        if (KD.push(AD[0]), 0 === RD.width || 0 === RD.height) return;
        let UD = 1;
        for (; UD < gD.length && Math.abs(gD[UD].getBoundingClientRect().top - RD.top) < 1;) UD++;
        const fD = DD => {
            const zD = {
              element: gD[DD],
              rect: pz(gD[DD].getBoundingClientRect())
            };
            return KD.push(zD), AD.push(zD), zD.rect
          },
          ID = UD > 1 ? fD(1).left - RD.left : RD.width,
          BD = gD.length > UD ? fD(UD).top - RD.top : RD.height,
          GD = rD.find(DD, zD);
        let hD = null;
        if (GD) {
          var nD;
          const {
            container: DD,
            box: zD
          } = GD;
          hD = null !== (nD = LD.get(DD)) && void 0 !== nD ? nD : null, hD || (hD = {
            top: DD.scrollTop,
            left: DD.scrollLeft,
            box: zD,
            viewport: pD,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, LD.set(DD, hD)), hD.probes.push(...AD)
        }
        const MD = sD.length;
        for (let QD = 0; QD < gD.length; QD++) {
          var OD, JD, ED;
          const DD = gD[QD],
            zD = Oz(RD, UD, ID, BD, QD),
            KD = DD.firstElementChild ? DD.querySelector(Qz) : null,
            rD = KD ? Pz(KD) : "pending";
          sD.push({
            key: wz(DD),
            rect: zD,
            panel: wD,
            scrollGroup: null !== (OD = null === GD || void 0 === GD ? void 0 : GD.group) && void 0 !== OD ? OD : null,
            visible: rz(zD, pD, null === GD || void 0 === GD ? void 0 : GD.box),
            clip: null !== (JD = null === GD || void 0 === GD ? void 0 : GD.box) && void 0 !== JD ? JD : null,
            element: DD,
            kind: rD,
            idx: KD ? Cz(KD, rD) : null,
            scrollContainer: null !== (ED = null === GD || void 0 === GD ? void 0 : GD.container) && void 0 !== ED ? ED : null
          })
        }
        null === (cD = hD) || void 0 === cD || cD.targets.push(...sD.slice(MD))
      },
      iz = DD => DD instanceof Element && null !== DD.closest(Ez),
      lz = DD => null !== DD.scrollContainer && iz(DD.element);
    class Wz {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(DD, zD, wD, pD) {
        this.latched = {
          source: DD,
          focusKey: zD,
          sinceMs: wD,
          hold: {
            id: ++this.presses,
            holdMs: pD
          }
        }
      }
      update(DD, zD, wD) {
        const pD = this.latched;
        return pD ? DD && zD === pD.focusKey ? wD - pD.sinceMs < pD.hold.holdMs ? null : (this.latched = null, pD.source) : (this.latched = null, null) : null
      }
      getHold() {
        var DD, zD;
        return null !== (DD = null === (zD = this.latched) || void 0 === zD ? void 0 : zD.hold) && void 0 !== DD ? DD : null
      }
      reset() {
        this.latched = null
      }
    }
    var Nz = wD(8705);
    const Zz = {
        kind: "none"
      },
      yz = DD => ({
        x: DD.clientX,
        y: DD.clientY
      }),
      kz = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class mz {
      constructor() {
        this.hovered = Zz, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(DD, zD, wD, pD, sD) {
        const KD = null !== zD ? {
            kind: "slot",
            idx: zD
          } : wD ? {
            kind: "element",
            element: wD
          } : Zz,
          rD = `${sD}|${Math.round(pD.clientX)},${Math.round(pD.clientY)}`,
          LD = (cD = this.hovered, gD = KD, "slot" === cD.kind && "slot" === gD.kind ? cD.idx === gD.idx : "element" === cD.kind && "element" === gD.kind ? cD.element === gD.element : cD.kind === gD.kind);
        var cD, gD;
        if (LD && rD === this.signature) return;
        const RD = !LD || sD !== this.holding || "" === this.signature;
        this.signature = rD, this.holding = sD, this.lastPoint = pD;
        const AD = this.hovered;
        if (this.hovered = KD, "slot" === KD.kind) return this.leaveElement(AD, null, pD), void(RD ? DD.hover(KD.idx, pD) : DD.moveTo(pD));
        if (LD) return void("element" === KD.kind ? (0, oD.o)(KD.element, KD.element, yz(pD)) : DD.hover(null, pD));
        DD.hover(null, pD);
        const UD = "element" === KD.kind ? KD.element : null;
        "element" === AD.kind ? (0, oD.o)(AD.element, UD, yz(pD)) : UD && (0, oD.o)(null, UD, yz(pD))
      }
      invalidate() {
        this.signature = ""
      }
      clear(DD) {
        const zD = this.hovered;
        this.hovered = Zz, this.signature = "", "none" !== zD.kind && (this.leaveElement(zD, null, this.lastPoint), DD && "slot" === zD.kind && DD.hover(null, this.lastPoint))
      }
      leaveElement(DD, zD, wD) {
        "element" === DD.kind && (0, oD.o)(DD.element, zD, yz(wD))
      }
    }
    class ez {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(DD, zD) {
        QD(DD) && (this.lastTiltedMs = zD)
      }
      allowsClick(DD) {
        return DD - this.lastTiltedMs > 150
      }
    }
    class oz {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(DD) {
        return 0 !== (0, ID.i)(DD, .2).y
      }
      step(DD, zD, wD) {
        DD !== this.container && (this.container = DD, this.remainder = 0);
        const pD = XD(zD, wD).y;
        if (0 === pD) return this.remainder = 0, !1;
        const sD = this.remainder + pD,
          KD = Math.trunc(sD);
        if (this.remainder = sD - KD, 0 === KD) return !1;
        const rD = DD.scrollTop;
        return DD.scrollTop = rD + KD, DD.scrollTop !== rD
      }
      current() {
        var DD;
        return null !== (DD = this.container) && void 0 !== DD && DD.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var az = wD(8707);
    const uz = "[data-pad-inventory-default]",
      vz = ".HotBarGameItemsContainer .InvenItem.Selected",
      tz = {
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
      Fz = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Yz = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Hz = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      qz = [...Yz, ...Hz],
      Dw = () => {
        return DD = (0, RD.g)("inventory"), !qz.map(RD.g).includes(DD) && !(0, ID.B)(DD);
        var DD
      },
      zw = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ww = (DD, zD) => {
        const wD = !(null === zD || void 0 === zD || !zD.isHolding());
        return function(DD, zD) {
          const wD = DD.find((DD => DD.visible && zD(DD)));
          if (wD) return wD;
          for (var pD = arguments.length, sD = new Array(pD > 2 ? pD - 2 : 0), KD = 2; KD < pD; KD++) sD[KD - 2] = arguments[KD];
          for (const rD of sD) {
            const zD = Mz(DD.filter(rD));
            if (zD) return zD
          }
          return Mz(DD)
        }(DD, (DD => {
          const {
            element: zD
          } = DD;
          return zD.matches(uz) || null !== zD.querySelector(uz) || zD.matches(vz)
        }), (DD => "slot" === DD.kind ? wD || null !== DD.idx && !(null === zD || void 0 === zD || !zD.hasItemAt(DD.idx)) : "recipe" === DD.kind || "pending" === DD.kind), (DD => "slot" === DD.kind || "button" === DD.kind))
      };
    class pw {
      constructor() {
        this.set = null, this.observer = new MutationObserver((DD => {
          DD.some((DD => !iz(DD.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = DD => {
          this.scrolled(DD.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const DD = [],
              zD = [];
            let wD = !1;
            const pD = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              sD = new Map,
              KD = new qD(zD);
            for (const AD of document.querySelectorAll(Jz)) {
              const RD = jz(AD);
              wD ||= null !== AD.querySelector(".CreativeCategoryTab");
              for (const wD of AD.querySelectorAll(`${Ez}:first-child`)) {
                const rD = wD.parentElement;
                Sz(rD, AD, dz(RD, rD), pD, DD, zD, KD, sD)
              }
              for (const wD of AD.querySelectorAll(Qz)) {
                var rD, LD, cD, gD;
                if (wD.closest(Ez) || wD.closest("[data-pad-ignore]")) continue;
                const UD = null === (rD = wD.parentElement) || void 0 === rD ? void 0 : rD.closest(Qz);
                if (UD && AD.contains(UD)) continue;
                const fD = Pz(wD),
                  ID = Cz(wD, fD);
                if (-1 === ID) continue;
                const BD = pz(wD.getBoundingClientRect());
                zD.push({
                  element: wD,
                  rect: BD
                });
                const GD = KD.findForParent(wD.parentElement, AD),
                  hD = GD && !sD.has(GD.container) ? GD : null;
                (hD ? sz(BD) : Kz(BD, pD)) && DD.push({
                  key: wz(wD),
                  rect: BD,
                  panel: dz(RD, wD),
                  scrollGroup: null !== (LD = null === hD || void 0 === hD ? void 0 : hD.group) && void 0 !== LD ? LD : null,
                  visible: rz(BD, pD, null === hD || void 0 === hD ? void 0 : hD.box),
                  clip: null !== (cD = null === hD || void 0 === hD ? void 0 : hD.box) && void 0 !== cD ? cD : null,
                  element: wD,
                  kind: fD,
                  idx: ID,
                  scrollContainer: null !== (gD = null === hD || void 0 === hD ? void 0 : hD.container) && void 0 !== gD ? gD : null
                })
              }
            }
            for (const [AD, UD] of sD) UD.holdsOthers = zD.some((DD => DD.element !== AD && AD.contains(DD.element) && !DD.element.closest(Ez)));
            const RD = new Map;
            for (const AD of DD) RD.set(AD.element, AD);
            return {
              targets: DD,
              byElement: RD,
              hasCategories: wD,
              probes: zD,
              scrollers: sD
            }
          })(), this.observer.disconnect();
          for (const DD of document.querySelectorAll(Jz)) this.observer.observe(DD, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(DD) {
        !this.set || DD instanceof Element && ((DD, zD) => {
          const wD = DD.scrollers.get(zD);
          if (!wD || wD.holdsOthers || zD.scrollLeft !== wD.left) return !1;
          const pD = zD.scrollTop - wD.top;
          if (0 === pD) return !0;
          wD.top = zD.scrollTop;
          for (const sD of wD.probes) sD.rect.top -= pD;
          for (const sD of wD.targets) sD.rect.top -= pD, sD.visible = rz(sD.rect, wD.viewport, wD.box);
          return !0
        })(this.set, DD) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((DD => {
          return zD = DD.rect, wD = DD.element.getBoundingClientRect(), !(zD.left === wD.left && zD.top === wD.top && zD.width === wD.width && zD.height === wD.height);
          var zD, wD
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const sw = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(ID.w.map((DD => [DD, (0, BD.b)(ID.z)]))), this.stickRepeat = new ID.e((0, BD.b)(ID.Y)), this.pageUpTimer = (0, BD.b)(ID.W), this.pageDownTimer = (0, BD.b)(ID.W), this.stickGate = new JD, this.pointer = null, this.activePress = null, this.dropLatch = new Wz, this.scroller = new oz, this.scrollStickClick = new ez, this.hover = new mz, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new mD, this.targets = new pw, this.hasCategories = !1, this.wasShowing = !1, this.state = Nz.b, this.isActive = () => (0, YD.e)(), this.isShowing = () => "inventory" === AD.e.getActiveConsumerName() && (0, fD.o)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, YD.c)()), (0, YD.e)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var DD;
            this.reopenSlotIdx = null !== (DD = this.focused ? bz(this.focused).idx : null) && void 0 !== DD ? DD : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, YD.o)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = DD => {
            (0, LD.unstable_batchedUpdates)((() => {
              this.frame(DD)
            }))
          }, this.shouldBlockRealPointer = DD => DD.isTrusted && !(0, hD.t)(DD) && this.isShowing(), this.noteRealPointer = DD => {
            DD instanceof MouseEvent && DD.isTrusted && !(0, hD.t)(DD) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = DD.clientX, this.lastRealPointer.y = DD.clientY)
          }, this.wakePressActs = DD => {
            var zD;
            return DD === (0, RD.g)("inventoryClose") ? !(null !== (zD = (0, YD.c)()) && void 0 !== zD && zD.isHolding()) : !(DD !== (0, RD.g)("inventory") || !Dw()) || ((0, ID.B)(DD) ? this.isNavButton(DD) : Hz.some((zD => (0, RD.g)(zD) === DD)))
          }
        }
        frame(DD) {
          var zD, wD, pD, sD, KD;
          const rD = (0, YD.c)();
          if (!(0, fD.o)()) return void(this.wasShowing && (this.endInteraction(rD), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), DD.wokeDevice && this.focusWakePointer(!(null === rD || void 0 === rD || !rD.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, UD.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const LD = performance.now();
          this.handleNavigation(DD, LD), this.handlePanels(DD), this.handlePaging(DD, LD), this.handleScroll(DD), this.handleButtons(DD, LD, rD), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const cD = this.ensureFocus(),
            gD = this.focusContext(rD);
          this.ring.show(cD);
          const AD = "slot" === gD.kind ? gD.idx : null,
            ID = null !== (zD = null === (wD = gD.actionElement) || void 0 === wD ? void 0 : wD.querySelector(".DoCraftItem")) && void 0 !== zD ? zD : gD.actionElement;
          this.pointer ? (this.hover.sync(rD, AD, ID, ((DD, zD) => {
            const wD = zD ? kz() : 0;
            return {
              clientX: DD.x - wD,
              clientY: DD.y - wD
            }
          })(this.pointer, gD.holding), gD.holding), uD.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: DD.isHeld((0, RD.g)("inventoryPrimary"))
          })) : cD && this.focused && this.hover.sync(rD, AD, ID, ((DD, zD) => {
            if (!zD) return {
              clientX: DD.left + DD.width - 10,
              clientY: DD.top + DD.height / 2 - 10
            };
            const wD = kz();
            return {
              clientX: DD.left + DD.width / 2 - wD,
              clientY: DD.top + DD.height / 2 - wD
            }
          })(cD, gD.holding), gD.holding), this.publishState({
            showing: !0,
            kind: gD.kind,
            holding: gD.holding,
            slotHasItem: gD.slotHasItem,
            pressHints: null !== (pD = null === (sD = gD.press) || void 0 === sD ? void 0 : sD.hints) && void 0 !== pD ? pD : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && lz(this.focusTarget),
            openButtonCloses: Dw(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === gD.kind && !(null === (KD = gD.actionElement) || void 0 === KD || !KD.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(DD) {
          var zD;
          const wD = (0, fD.e)();
          if (!wD) return;
          this.targets.revalidate();
          const pD = this.getTargets().targets;
          this.setFocus(null !== (zD = nz(wD, pD)) && void 0 !== zD ? zD : DD ? Bz(wD, pD, (DD => {
            let {
              rect: zD
            } = DD;
            const pD = Math.max(zD.left - wD.x, 0, wD.x - (zD.left + zD.width)),
              sD = Math.max(zD.top - wD.y, 0, wD.y - (zD.top + zD.height));
            return Math.hypot(pD, sD) <= Math.min(zD.width, zD.height) / 2
          })) : null, !1), "cursor" === (0, UD.g)().inventoryNavigation && (this.pointer = {
            x: wD.x,
            y: wD.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const DD = this.lastRealPointer;
          if (!DD || "keyboardMouse" !== cD.e.get("activeInputDevice")) return;
          const zD = document.elementFromPoint(DD.x, DD.y);
          zD && (0, oD.o)(null, zD, DD)
        }
        endInteraction(DD) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const zD of this.dpadTimers.values()) zD.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(DD), this.ring.hide(), this.releasePointer(), this.publishState(Nz.b)
        }
        getTargets() {
          const DD = this.targets.get();
          return this.hasCategories = DD.hasCategories, DD
        }
        currentTarget() {
          var DD;
          return this.focused && null !== (DD = this.getTargets().byElement.get(this.focused)) && void 0 !== DD ? DD : null
        }
        readFocusRect() {
          const DD = this.focused;
          if (null === DD || void 0 === DD || !DD.isConnected || !DD.closest(Jz)) return null;
          const zD = DD.getBoundingClientRect();
          return zD.width > 0 && zD.height > 0 ? {
            left: zD.left,
            top: zD.top,
            width: zD.width,
            height: zD.height
          } : null
        }
        ensureFocus() {
          const DD = this.readFocusRect();
          if (DD || this.pointer) return DD;
          const {
            targets: zD,
            byElement: wD
          } = this.getTargets();
          let pD = null,
            sD = !1;
          if (this.lastRect) pD = Bz(Lz(this.lastRect), zD);
          else {
            var KD, rD;
            const DD = ((DD, zD) => {
                const wD = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return wD ? ww(DD.filter((DD => wD.contains(DD.element))), zD) : null
              })(zD, (0, YD.c)()),
              LD = zD.find((DD => null !== DD.idx && DD.idx === this.reopenSlotIdx)),
              cD = document.querySelector(vz);
            sD = null !== DD || void 0 !== LD, pD = null !== (KD = null !== (rD = null !== DD && void 0 !== DD ? DD : LD) && void 0 !== rD ? rD : cD && wD.get(cD)) && void 0 !== KD ? KD : Mz(zD)
          }
          return this.setFocus(pD, sD), this.lastRect
        }
        setFocus(DD) {
          let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          DD && (this.focused = DD.element, this.focusTarget = DD, this.panelMemory.set(DD.panel, DD.element), zD && DD.scrollContainer && ((DD, zD) => {
            const wD = DD.getBoundingClientRect(),
              pD = SD(zD),
              sD = zD.scrollTop;
            return wD.top < pD.top ? zD.scrollTop -= pD.top - wD.top : wD.bottom > pD.bottom && (zD.scrollTop += wD.bottom - pD.bottom), zD.scrollTop !== sD
          })(DD.element, DD.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, UD.g)().inventoryNavigation) {
              if (this.lastRect) {
                const DD = Lz(this.lastRect);
                this.pointer = {
                  x: DD.x,
                  y: DD.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const DD = this.lastRect ? Lz(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: DD.x,
            y: DD.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, uD.hide()
        }
        hoverAtPointer() {
          var DD;
          const zD = nz(this.pointer, this.getTargets().targets);
          this.focusTarget = zD, (null === zD || void 0 === zD ? void 0 : zD.element) !== this.focused && (this.focused = null !== (DD = null === zD || void 0 === zD ? void 0 : zD.element) && void 0 !== DD ? DD : null, zD && (this.panelMemory.set(zD.panel, zD.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(DD, zD) {
          const wD = this.focusTarget,
            pD = wD && (0, UD.g)().cursorMagnetism ? Lz(Gz(wD)) : null;
          this.pointer = ED(this.pointer, {
            stick: DD.leftStick,
            moveDeadzone: (0, UD.g)().moveDeadzone,
            dpad: zD,
            dtMs: DD.dtMs,
            cursorSpeedPercent: (0, UD.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: pD
            }
          })
        }
        move(DD) {
          this.targets.revalidate();
          const zD = this.currentTarget();
          zD && this.setFocus(Iz(zD, this.getTargets().targets, DD))
        }
        step(DD) {
          const zD = this.pointer;
          if (zD && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((DD, zD, wD) => {
            var pD;
            const sD = {
              key: "",
              rect: {
                left: DD.x,
                top: DD.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (pD = Iz(sD, zD, wD)) && void 0 !== pD ? pD : Bz(DD, zD)
          })(zD, this.getTargets().targets, DD));
          this.move(DD)
        }
        isNavButton(DD) {
          return !Yz.some((zD => (0, RD.g)(zD) === DD)) && !(DD === (0, RD.g)("inventory") && Dw())
        }
        handleNavigation(DD, zD) {
          const wD = (0, UD.g)().inventoryNavigation,
            pD = {
              x: 0,
              y: 0
            };
          let sD = null;
          for (const cD of ID.w) {
            const KD = this.isNavButton(cD) && DD.isHeld(cD);
            KD && (pD.x += tz[cD].x, pD.y += tz[cD].y), this.dpadTimers.get(cD).update(KD, zD) && "cursor" !== wD && (sD ??= cD)
          }
          const KD = this.stickGate.update(DD.leftStick, (0, UD.g)().moveDeadzone);
          if (sD && (this.step(sD), this.stickGate.lock()), "slot" !== wD) {
            const zD = ((DD, zD, wD, pD) => "hybrid" !== DD ? "cursor" === DD : !pD && (zD || wD))(wD, null !== this.pointer, KD, null !== sD);
            return zD && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(DD, "cursor" === wD ? pD : {
              x: 0,
              y: 0
            }))
          }
          const rD = (0, ID.i)(DD.leftStick, (0, UD.g)().moveDeadzone),
            LD = this.stickRepeat.update(KD ? (0, ID.ab)(rD) : null, zD);
          LD && this.move(LD)
        }
        applyCategoryPlace() {
          const DD = this.placeAfterCategory;
          if (!DD) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const zD = Bz(Lz(DD.rect), this.getTargets().targets, (zD => zD.scrollGroup === DD.scrollGroup));
          this.setFocus(zD, !1)
        }
        applyFocusRequest() {
          const DD = (0, YD.o)();
          DD && (this.targets.invalidate(), this.setFocus((0, YD.b)(this.getTargets().targets, DD)))
        }
        handlePanels(DD) {
          var zD, wD, pD;
          const sD = DD.wasPressed((0, RD.g)("inventoryPanelPrevious")),
            KD = DD.wasPressed((0, RD.g)("inventoryPanelNext"));
          if (!sD && !KD) return;
          const {
            targets: rD
          } = this.getTargets(), LD = (cD = ((DD, zD) => {
            const wD = [];
            for (const sD of DD) sD.visible && !wD.includes(sD.panel) && wD.push(sD.panel);
            const pD = DD => {
              const pD = zD.indexOf(DD);
              return -1 === pD ? zD.length + wD.indexOf(DD) : pD
            };
            return wD.sort(((DD, zD) => pD(DD) - pD(zD)))
          })(rD, Vz), gD = null !== (zD = null === (wD = this.focusTarget) || void 0 === wD ? void 0 : wD.panel) && void 0 !== zD ? zD : null, AD = KD ? 1 : -1, 0 === cD.length ? null : cD[cz(null === gD ? -1 : cD.indexOf(gD), cD.length, AD)]);
          var cD, gD, AD;
          if (null === LD) return;
          const UD = this.panelMemory.get(LD),
            fD = rD.filter((DD => DD.panel === LD)),
            ID = null !== (pD = fD.find((DD => DD.element === UD && DD.visible))) && void 0 !== pD ? pD : ww(fD, (0, YD.c)());
          this.setFocus(ID)
        }
        handlePaging(DD, zD) {
          const wD = (0, RD.g)("menuPageUp"),
            pD = (0, RD.g)("menuPageDown"),
            sD = this.pageUpTimer.update(DD.isHeld(wD), zD),
            KD = this.pageDownTimer.update(DD.isHeld(pD), zD);
          if (!sD && !KD) return;
          const rD = KD ? 1 : -1;
          if (!DD.wasPressed(KD ? pD : wD) && this.hasCategories) return;
          if ((DD => {
              const zD = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === zD.length) return !1;
              const wD = zD.findIndex((DD => DD.classList.contains("Selected"))),
                pD = zD[cz(wD, zD.length, DD)];
              return (0, oD.m)(pD, (0, oD.w)(pD)), !0
            })(rD)) {
            var LD, cD;
            this.targets.invalidate();
            const DD = null !== (LD = null === (cD = this.focusTarget) || void 0 === cD ? void 0 : cD.scrollGroup) && void 0 !== LD ? LD : null,
              zD = this.readFocusRect();
            return void(this.placeAfterCategory = null !== DD && zD && !this.pointer ? {
              rect: zD,
              scrollGroup: DD
            } : null)
          }
          const {
            targets: gD
          } = this.getTargets(), AD = this.currentTarget(), UD = AD && lz(AD) ? AD : gD.find((DD => lz(DD) && DD.visible));
          if (!UD) return;
          const fD = ((DD, zD, wD, pD) => {
            if (null === DD.scrollGroup) return null;
            const sD = Lz(DD.rect),
              KD = sD.x,
              rD = sD.y + ("Down" === wD ? pD : -pD);
            let LD = null,
              cD = 1 / 0;
            for (const gD of zD) {
              if (gD.scrollGroup !== DD.scrollGroup || gD.key === DD.key) continue;
              const zD = Lz(gD.rect);
              if ("Down" === wD ? zD.y <= sD.y : zD.y >= sD.y) continue;
              const pD = Math.hypot(zD.x - KD, zD.y - rD);
              pD < cD && (LD = gD, cD = pD)
            }
            return LD
          })(UD, gD, rD > 0 ? "Down" : "Up", UD.scrollContainer.clientHeight);
          this.setFocus(null !== fD && void 0 !== fD ? fD : UD)
        }
        handleScroll(DD) {
          var zD, wD, pD, sD, KD, rD;
          if (!this.scroller.isScrolling(DD.rightStick)) return void this.scroller.reset();
          const {
            targets: LD
          } = this.getTargets(), cD = this.pointer, gD = !cD && this.focusTarget && lz(this.focusTarget) ? this.focusTarget.scrollContainer : null, RD = cD && (null === (zD = LD.find((DD => DD.clip && hz(DD.clip, cD)))) || void 0 === zD ? void 0 : zD.scrollContainer), AD = null !== (wD = null !== (pD = null !== (sD = this.scroller.current()) && void 0 !== sD ? sD : RD) && void 0 !== pD ? pD : gD) && void 0 !== wD ? wD : null === (KD = LD.find(lz)) || void 0 === KD ? void 0 : KD.scrollContainer;
          if (!AD || !this.scroller.step(AD, DD.rightStick, DD.dtMs)) return;
          this.targets.scrolled(AD);
          const UD = cD || (null === (rD = this.focusTarget) || void 0 === rD ? void 0 : rD.scrollContainer) !== AD ? null : this.readFocusRect();
          if (!UD) return;
          const fD = SD(AD),
            ID = Lz(UD);
          if (ID.y < fD.top || ID.y > fD.bottom) {
            const DD = this.focusTarget.scrollGroup,
              zD = Bz(ID, this.getTargets().targets, (zD => zD.scrollGroup === DD));
            this.setFocus(zD, !1)
          }
        }
        focusContext(DD) {
          const {
            kind: zD,
            idx: wD
          } = this.focused ? bz(this.focused) : {
            kind: null,
            idx: null
          }, pD = this.focused ? xz(this.focused) : null, sD = pD ? (0, az.d)(pD) : null;
          return {
            kind: zD,
            idx: wD,
            actionElement: pD,
            press: sD,
            hasPress: null !== sD,
            hasBack: !(null === sD || void 0 === sD || !sD.back),
            holding: DD.isHolding(),
            slotHasItem: null !== wD && DD.hasItemAt(wD)
          }
        }
        handleButtons(DD, zD, wD) {
          var pD, sD;
          if (!this.activePress || DD.isHeld(this.activePress.button) && (pD = this.activePress.target, sD = this.focused, null !== pD.recipe ? Tz(sD).recipe === pD.recipe : sD === pD.element) || this.releasePress(), this.scrollStickClick.update(DD.rightStick, zD), !this.handleHotbarPick(DD, wD)) {
            for (const [pD, sD] of Fz) {
              const KD = (0, RD.g)(sD);
              if (!DD.wasPressed(KD) || "openButton" === pD && !Dw()) continue;
              if ("RS" === KD && !this.scrollStickClick.allowsClick(zD)) continue;
              const rD = this.focusContext(wD),
                LD = tD(pD, rD);
              LD && this.runIntent(LD, rD, KD, wD)
            }
            this.handleDrop(DD, zD, wD)
          }
        }
        handleHotbarPick(DD, zD) {
          const wD = this.hotbarPick;
          if (!wD) return !1;
          const pD = DD.wasPressed((0, RD.g)("inventoryPrimary")) || DD.wasPressed((0, RD.g)("inventoryHotbarSwap"));
          if (!pD && !DD.wasPressed((0, RD.g)("inventoryClose")) && !zD.isHolding()) return !(DD.wasPressed((0, RD.g)("inventory")) && Dw());
          const sD = this.focusTarget;
          pD && "hotbar" === (null === sD || void 0 === sD ? void 0 : sD.panel) && null !== sD.idx && sD.idx !== wD.idx && (zD.swapWithHotbar(sD.idx, wD.idx), this.afterAction()), this.hotbarPick = null;
          const KD = wD.element.isConnected ? this.getTargets().byElement.get(wD.element) : void 0;
          return KD && this.setFocus(KD), !0
        }
        startHotbarPick(DD) {
          var zD;
          const {
            targets: wD,
            byElement: pD
          } = this.getTargets(), sD = document.querySelector(vz), KD = null !== (zD = sD && pD.get(sD)) && void 0 !== zD ? zD : wD.find((DD => "hotbar" === DD.panel));
          KD && this.focused && (this.hotbarPick = {
            idx: DD,
            element: this.focused
          }, this.setFocus(KD))
        }
        focusKey() {
          return this.focused ? wz(this.focused) : null
        }
        handleDrop(DD, zD, wD) {
          const pD = (0, RD.g)("inventoryDrop");
          if (DD.wasPressed(pD)) {
            const DD = (sD = this.focusContext(wD)).holding ? {
              kind: "Qg"
            } : "slot" === sD.kind && sD.slotHasItem && null !== sD.idx ? {
              kind: "slot",
              idx: sD.idx
            } : null;
            return void(DD && (this.dropFrom(DD, !1, wD), this.dropLatch.press(DD, this.focusKey(), zD, GD.d[(0, UD.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var sD;
          const KD = this.dropLatch.update(DD.isHeld(pD), this.focusKey(), zD);
          KD && ((DD, zD, wD) => "Qg" === DD.kind ? zD : !zD && wD(DD.idx))(KD, wD.isHolding(), wD.hasItemAt) && (this.dropFrom(KD, !0, wD), this.afterAction())
        }
        dropFrom(DD, zD, wD) {
          "Qg" === DD.kind ? wD.dropHeld(zD, this.slotPoint()) : wD.dropSlot(DD.idx, zD)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (DD => {
            const zD = Lz(DD);
            return {
              clientX: zD.x,
              clientY: zD.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(DD, zD, wD, pD) {
          const sD = zD.idx,
            KD = zD.actionElement;
          switch (KD && zw.has(DD) && (0, hD.z)(KD), DD) {
            case "slotPrimary":
              pD.primary(sD, this.slotPoint());
              break;
            case "slotSecondary":
              pD.secondary(sD, this.slotPoint());
              break;
            case "slotQuickMove":
              pD.quickMove(sD, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(sD);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(zD.press, "pressPrimary" === DD ? "primary" : "secondary", wD);
              break;
            case "click":
              (0, oD.m)(KD, (0, oD.w)(KD));
              break;
            case "openKeyboard":
              (0, oD.K)(KD) && (0, oD.H)(KD);
              break;
            case "pressBack":
              zD.press.back();
              break;
            case "cancel":
              pD.cancel();
              break;
            case "close":
              return this.releasePress(), void pD.close()
          }
          this.afterAction()
        }
        startPress(DD, zD, wD) {
          this.releasePress(), DD.press(zD) && (this.activePress = {
            handlers: DD,
            button: wD,
            target: Tz(this.focused)
          })
        }
        releasePress() {
          var DD, zD, wD;
          null === (DD = this.activePress) || void 0 === DD || null === (zD = (wD = DD.handlers).release) || void 0 === zD || zD.call(wD), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(DD) {
          ((DD, zD) => {
            var wD, pD, sD, KD, rD, LD;
            return DD.showing === zD.showing && DD.kind === zD.kind && DD.holding === zD.holding && DD.slotHasItem === zD.slotHasItem && (null === (wD = DD.pressHints) || void 0 === wD ? void 0 : wD.primary) === (null === (pD = zD.pressHints) || void 0 === pD ? void 0 : pD.primary) && (null === (sD = DD.pressHints) || void 0 === sD ? void 0 : sD.secondary) === (null === (KD = zD.pressHints) || void 0 === KD ? void 0 : KD.secondary) && (null === (rD = DD.pressHints) || void 0 === rD ? void 0 : rD.back) === (null === (LD = zD.pressHints) || void 0 === LD ? void 0 : LD.back) && DD.hasCategories === zD.hasCategories && DD.hasList === zD.hasList && DD.openButtonCloses === zD.openButtonCloses && DD.steppingSlots === zD.steppingSlots && DD.hotbarPicking === zD.hotbarPicking && DD.quickMoveToHotbar === zD.quickMoveToHotbar && DD.dropStackHold === zD.dropStackHold
          })(DD, this.state) || (this.state = DD, gD.l.KG(Nz.f, DD))
        }
      },
      Kw = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var rw = wD(8713),
      Lw = wD(338),
      gw = wD(1648),
      Rw = wD(8201);
    const Aw = "[data-pad-secondary]",
      Uw = DD => DD instanceof HTMLElement && (0, HD.r)(DD) && !(0, HD.u)(DD),
      fw = DD => {
        const zD = DD.querySelector(Aw);
        if (zD && Uw(zD)) return zD;
        for (const sD of null !== (wD = null === (pD = DD.parentElement) || void 0 === pD ? void 0 : pD.children) && void 0 !== wD ? wD : []) {
          var wD, pD;
          if (sD !== DD && sD.matches(Aw) && Uw(sD)) return sD
        }
        return null
      },
      Iw = (DD, zD, wD, pD) => Math.max(0, Math.max(DD, wD) - Math.min(zD, pD)),
      Bw = (DD, zD, wD, pD) => Math.max(0, Math.min(zD, pD) - Math.max(DD, wD)),
      Gw = (DD, zD, wD) => {
        const pD = (DD.left + DD.right) / 2,
          sD = (DD.top + DD.bottom) / 2,
          KD = (zD.left + zD.right) / 2,
          rD = (zD.top + zD.bottom) / 2;
        if ("Left" === wD || "Right" === wD) {
          const LD = "Right" === wD ? 1 : -1;
          return {
            forwardGap: "Right" === wD ? zD.left - DD.right : DD.left - zD.right,
            centreForward: (KD - pD) * LD,
            sidewaysGap: Iw(DD.top, DD.bottom, zD.top, zD.bottom),
            sidewaysOverlap: Bw(DD.top, DD.bottom, zD.top, zD.bottom),
            centreSideways: Math.abs(rD - sD),
            startSideways: Math.abs(zD.top - DD.top),
            fromSidewaysSize: DD.bottom - DD.top,
            toSidewaysSize: zD.bottom - zD.top,
            toLength: zD.right - zD.left
          }
        }
        const LD = "Down" === wD ? 1 : -1;
        return {
          forwardGap: "Down" === wD ? zD.top - DD.bottom : DD.top - zD.bottom,
          centreForward: (rD - sD) * LD,
          sidewaysGap: Iw(DD.left, DD.right, zD.left, zD.right),
          sidewaysOverlap: Bw(DD.left, DD.right, zD.left, zD.right),
          centreSideways: Math.abs(KD - pD),
          startSideways: Math.abs(zD.left - DD.left),
          fromSidewaysSize: DD.right - DD.left,
          toSidewaysSize: zD.right - zD.left,
          toLength: zD.bottom - zD.top
        }
      },
      hw = DD => DD.centreForward > .5 && DD.forwardGap >= -DD.toLength / 2,
      nw = DD => {
        const zD = DD.sidewaysOverlap > 0 ? 0 : 2 * DD.fromSidewaysSize,
          wD = DD.fromSidewaysSize > 1.5 * DD.toSidewaysSize ? DD.startSideways : DD.centreSideways;
        return Math.max(0, DD.forwardGap) + 3 * DD.sidewaysGap + zD + .1 * wD
      },
      Mw = (DD, zD) => Bw(DD.top, DD.bottom, zD.top, zD.bottom) > 0 || zD.bottom - zD.top > zD.right - zD.left,
      Ow = (DD, zD, wD, pD, sD, KD) => {
        const rD = sD ? Ew(DD, zD, wD, sD) : new Set,
          LD = Xw(DD, zD, wD, rD);
        return LD < 0 && rD.size > 0 && KD ? Jw(DD, zD, wD, KD) : pD && LD >= 0 ? Qw(DD, zD, wD, pD, LD, rD) : LD
      },
      Jw = (DD, zD, wD, pD) => {
        const sD = new Set,
          KD = Xw(DD, zD, "Up", sD) >= 0,
          rD = Xw(DD, zD, "Down", sD) >= 0,
          LD = new Set;
        return zD.forEach(((zD, wD) => {
          const sD = zD.top + zD.bottom < DD.top + DD.bottom;
          pD[wD] && !(sD ? KD : rD) || LD.add(wD)
        })), Xw(DD, zD, wD, LD)
      },
      Ew = (DD, zD, wD, pD) => {
        const sD = new Set;
        return "Left" !== wD && "Right" !== wD || zD.forEach(((zD, wD) => {
          pD[wD] && Bw(DD.top, DD.bottom, zD.top, zD.bottom) <= 0 && sD.add(wD)
        })), sD
      },
      Qw = (DD, zD, wD, pD, sD, KD) => {
        const rD = Gw(DD, zD[sD], wD).forwardGap;
        let LD = sD,
          cD = pD[sD],
          gD = 1 / 0;
        return zD.forEach(((zD, RD) => {
          const AD = pD[RD];
          if (KD.has(RD) || AD < cD || AD === cD && LD === sD) return;
          const UD = Gw(DD, zD, wD);
          if (!hw(UD) || UD.forwardGap < 0 || UD.forwardGap >= rD) return;
          const fD = nw(UD);
          (AD > cD || fD < gD) && (LD = RD, cD = AD, gD = fD)
        })), LD
      },
      Xw = (DD, zD, wD, pD) => {
        let sD = -1,
          KD = 1 / 0;
        if (zD.forEach(((zD, rD) => {
            const LD = ((DD, zD, wD) => {
              const pD = Gw(DD, zD, wD);
              if (!hw(pD)) return null;
              const sD = Math.max(0, pD.forwardGap);
              return pD.sidewaysOverlap <= 0 && pD.sidewaysGap > 2 * (sD + 1) ? null : nw(pD)
            })(DD, zD, wD);
            null !== LD && LD < KD && !pD.has(rD) && (KD = LD, sD = rD)
          })), sD < 0) return -1;
        const rD = zD[sD],
          LD = Gw(DD, rD, wD).forwardGap;
        let cD = LD,
          gD = sD;
        return zD.forEach(((zD, KD) => {
          if (KD === sD || pD.has(KD) || !((DD, zD, wD) => {
              const pD = "Left" === wD || "Right" === wD,
                sD = pD ? Bw(DD.top, DD.bottom, zD.top, zD.bottom) : Bw(DD.left, DD.right, zD.left, zD.right),
                KD = pD ? Math.min(DD.bottom - DD.top, zD.bottom - zD.top) : Math.min(DD.right - DD.left, zD.right - zD.left);
              return sD > 0 && sD >= KD / 2
            })(zD, rD, wD)) return;
          const RD = Gw(DD, zD, wD);
          hw(RD) && RD.forwardGap + RD.toLength <= LD + 1 && RD.forwardGap < cD && (cD = RD.forwardGap, gD = KD)
        })), gD
      },
      Vw = (DD, zD) => {
        let wD = -1,
          pD = 1 / 0;
        return zD.forEach(((zD, sD) => {
          const KD = Math.max(zD.left - DD.x, 0, DD.x - zD.right),
            rD = Math.max(zD.top - DD.y, 0, DD.y - zD.bottom),
            LD = Math.hypot(KD, rD);
          LD < pD && (pD = LD, wD = sD)
        })), wD
      },
      Pw = (DD, zD) => {
        const wD = Math.min(DD.bottom - DD.top, zD.bottom - zD.top) / 2;
        return Math.abs(DD.top - zD.top) > wD ? DD.top - zD.top : DD.left - zD.left
      },
      Cw = DD => {
        let zD = -1;
        for (let wD = 0; wD < DD.length; wD++)(zD < 0 || Pw(DD[wD], DD[zD]) < 0) && (zD = wD);
        return zD
      };
    var xw = wD(1694),
      Tw = wD(8717),
      bw = wD(8723);
    const jw = DD => {
        if ("death" !== DD || "inGame" !== cD.e.get("gameState") || "off" === (0, UD.g)().quickChat || null === (0, xw.d)()) return !1;
        const zD = (0, RD.g)("chat");
        return zD !== (0, RD.g)("menuConfirm") && zD !== (0, RD.g)("menuBack")
      },
      dw = new Tw.d;
    var Sw = wD(4305),
      iw = wD(8726),
      lw = wD(8732);
    const Ww = DD => {
        let zD = null;
        for (const wD of DD.querySelectorAll("[data-pad-tabs]"))(0, HD.r)(wD) && (!zD || Number(wD.dataset.padTabs) < Number(zD.dataset.padTabs)) && (zD = wD);
        return zD
      },
      Nw = (DD, zD, wD, pD) => {
        DD.focusWhenFound((() => {
          const sD = DD.pickInitial(zD);
          if (sD && !wD.has(sD) && (null === pD || void 0 === pD || !pD.contains(sD))) return sD;
          const KD = ((DD, zD) => {
              const wD = zD => DD.getEnabledCandidates(zD).filter((DD => !DD.closest("[data-pad-tabs]")));
              for (const pD of (0, HD.g)(zD)) {
                const DD = wD(pD);
                if (DD.length > 0) return DD
              }
              return wD(zD)
            })(DD, zD).filter((DD => !wD.has(DD))),
            rD = Cw(KD.map((DD => DD.getBoundingClientRect())));
          return rD >= 0 ? KD[rD] : null
        }), 3e3)
      },
      Zw = (DD, zD, wD, pD) => {
        var sD;
        const KD = ((DD, zD) => {
          if (0 === DD.length) return null;
          const wD = DD.findIndex((DD => "true" === DD.dataset.padSelected));
          return wD < 0 ? zD > 0 ? DD[0] : DD[DD.length - 1] : DD[(wD + zD + DD.length) % DD.length]
        })([...wD.querySelectorAll("[data-pad-tab]")].filter((DD => (0, HD.r)(DD) && !(0, HD.u)(DD))), pD);
        if (!KD) return;
        const rD = null !== (sD = null === DD || void 0 === DD ? void 0 : DD.getFocused()) && void 0 !== sD ? sD : null,
          LD = !(null === rD || void 0 === rD || !rD.isConnected) && wD.contains(rD),
          cD = DD && !LD ? new Set(DD.getEnabledCandidates(zD)) : null;
        (0, oD.c)(KD), DD && (cD ? Nw(DD, zD, cD, wD) : DD.setFocus(KD, {
          byUser: !0
        }))
      },
      yw = DD => {
        var zD;
        const wD = SD(null !== (zD = CD(DD, "x")) && void 0 !== zD ? zD : DD),
          pD = (0, HD.e)(DD).filter((DD => !(0, HD.u)(DD))),
          sD = pD.filter((DD => iD(DD.getBoundingClientRect(), wD)));
        return (sD.length > 0 ? sD : pD).sort(((DD, zD) => Pw(DD.getBoundingClientRect(), zD.getBoundingClientRect())))
      },
      kw = (DD, zD, wD) => {
        const pD = [...zD.querySelectorAll("[data-pad-row]")].filter(HD.r),
          sD = DD.getFocused(),
          KD = sD ? pD.findIndex((DD => DD.contains(sD))) : -1;
        let rD = 0,
          LD = wD > 0 ? 0 : pD.length - 1;
        if (KD >= 0 && sD) rD = Math.max(0, yw(pD[KD]).indexOf(sD)), LD = KD + wD;
        else if (sD) {
          const DD = sD.getBoundingClientRect(),
            zD = pD.map((zD => {
              const pD = zD.getBoundingClientRect();
              return wD > 0 ? pD.top >= DD.top : pD.bottom <= DD.bottom
            }));
          LD = wD > 0 ? zD.indexOf(!0) : zD.lastIndexOf(!0)
        }
        for (let cD = LD; cD >= 0 && cD < pD.length; cD += wD) {
          const zD = yw(pD[cD]);
          if (zD.length > 0) return void DD.setFocus(zD[Math.min(rD, zD.length - 1)], {
            byUser: !0
          })
        }
      },
      mw = (DD, zD, wD) => {
        var pD, sD;
        const KD = null !== (pD = null === DD || void 0 === DD ? void 0 : DD.getFocused()) && void 0 !== pD ? pD : null,
          rD = null !== KD && void 0 !== KD && KD.closest("[data-pad-row]") ? "x" : "y",
          LD = null !== (sD = KD ? CD(KD, rD, zD) : null) && void 0 !== sD ? sD : TD(zD, rD);
        if (!LD) return;
        const cD = KD ? (0, oD.w)(KD) : null;
        if (dD(LD, rD, wD * ("y" === rD ? LD.clientHeight : LD.clientWidth) * .85), !DD || !cD) return;
        const gD = SD(LD),
          RD = DD.getEnabledCandidates(zD).filter((DD => LD.contains(DD) && iD(DD.getBoundingClientRect(), gD))),
          AD = Vw(cD, RD.map((DD => DD.getBoundingClientRect())));
        AD >= 0 && DD.setFocus(RD[AD], {
          scroll: !1,
          byUser: !0
        })
      };
    let ew = null;
    const ow = (DD, zD) => {
        var wD, pD;
        const sD = zD.querySelector("[data-pad-friends-column]"),
          KD = DD.getFocused();
        if (!sD || !KD || !sD.contains(KD)) return !1;
        const rD = DD.getEnabledCandidates(zD).filter((DD => !sD.contains(DD))),
          LD = Vw((0, oD.w)(KD), rD.map((DD => DD.getBoundingClientRect()))),
          cD = null === (wD = ew) || void 0 === wD ? void 0 : wD.deref();
        return DD.setFocus(null !== cD && void 0 !== cD && cD.isConnected ? cD : null !== (pD = rD[LD]) && void 0 !== pD ? pD : null, {
          byUser: !0
        }), !0
      },
      aw = DD => {
        const zD = (0, RD.g)(DD);
        return (0, ID.B)(zD) || Rw.r.some((DD => (0, RD.g)(DD) === zD)) ? null : zD
      },
      uw = (DD, zD) => {
        const wD = aw(zD);
        return null !== wD && DD.wasPressed(wD)
      },
      vw = function(DD, zD, wD) {
        let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const sD = (DD => {
            var zD, wD;
            return null !== (zD = null === (wD = Ww(DD)) || void 0 === wD ? void 0 : wD.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== zD ? zD : null
          })(zD),
          KD = DD && sD ? new Set(DD.getEnabledCandidates(zD)) : null;
        (0, rw.d)(), wD === Lw.l.SETTINGS && (0, gw.o)(cD.e.get("openEverythingMenuName")) ? cD.e.set({
          openEverythingMenuName: wD
        }) : (0, gw.w)((0, lw.e)("padMenuShortcut"), wD, pD), DD && KD && sD && Nw(DD, zD, KD, sD.closest("[data-pad-tabs]"))
      },
      tw = DD => null !== DD.closest(".Dropdown-root") || null !== DD.querySelector(".Dropdown-root.is-open"),
      Fw = DD => null !== (0, iw.c)() && "popup" !== DD.layer.kind && !Ww(DD.root) && !tw(DD.root),
      Yw = (0, BD.b)(ID.W),
      Hw = (0, BD.b)(ID.W),
      qw = (DD, zD, wD) => {
        if (((DD, zD) => {
            const wD = (0, RD.g)("chat");
            return jw(zD) && DD.isHeld(wD) ? "hold" === dw.update(DD.wasPressed(wD), DD.isHeld(wD), performance.now(), GD.d[(0, UD.g)().tapHoldTime].wheelMs) && (AD.e.consumeButton(wD), gD.l.KG(bw.k), !0) : (dw.release(), !1)
          })(zD, wD.layer.kind)) return !0;
        const pD = wD.root;
        for (const [rD, LD] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (zD.wasPressed((0, RD.g)(rD))) {
            const zD = tw(pD) ? null : Ww(pD);
            if (zD) Zw(DD, pD, zD, LD);
            else if (Fw(wD)) {
              var sD;
              const zD = DD ? new Set(DD.getEnabledCandidates(pD)) : null;
              null !== (sD = (0, iw.c)()) && void 0 !== sD && sD(LD) && DD && zD && Nw(DD, pD, zD, null)
            } else DD && kw(DD, pD, LD);
            return !0
          } for (const [rD, LD, cD] of [
            ["menuPageUp", -1, Yw],
            ["menuPageDown", 1, Hw]
          ]) {
          const wD = (0, RD.g)(rD);
          if (zD.wasPressed(wD) && cD.reset(), cD.update(zD.isHeld(wD), performance.now())) return mw(DD, pD, LD), !0
        }
        const KD = "popup" === wD.layer.kind;
        return uw(zD, "pause") ? (KD || (0, gw.r)() && "menu" !== wD.layer.kind || vw(DD, pD, (0, gw.r)() ? Lw.l.SETTINGS : (0, Sw.d)()), !0) : !!uw(zD, "leaderboard") && ("home" === wD.layer.kind ? (DD => {
          const zD = [...DD.querySelectorAll("[data-pad-notifications]")].find(HD.r);
          zD && (0, oD.c)(zD)
        })(pD) : KD || vw(DD, pD, Lw.l.LOBBY_LEADERBOARD, "inGame" === cD.e.get("gameState")), !0)
      },
      Dp = (DD, zD, wD) => {
        if (qw(DD, zD, wD)) return !0;
        const pD = "home" === wD.layer.kind;
        if (zD.wasPressed((0, RD.g)("menuSecondary"))) {
          const zD = DD.getFocused(),
            sD = zD ? fw(zD) : null;
          if (sD) return (0, oD.c)(sD), !0;
          if (pD) {
            const zD = wD.root.querySelector("[data-pad-search] input");
            return zD && (0, HD.t)(zD, wD.root) ? (DD.setFocus(zD, {
              byUser: !0
            }), (0, oD.c)(zD)) : cD.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!pD || !uw(zD, "inventory")) && (((DD, zD) => {
          var wD, pD;
          const sD = zD.querySelector("[data-pad-friends-column]");
          if (!sD || !(0, HD.r)(sD)) return void(0, gw.w)((0, lw.e)("padMenuShortcut"), Lw.l.SOCIAL);
          if (ow(DD, zD)) return;
          const KD = null !== (wD = null === (pD = sD.querySelector("[data-pad-friends-start]")) || void 0 === pD ? void 0 : pD.getBoundingClientRect().top) && void 0 !== wD ? wD : -1 / 0,
            rD = DD.getEnabledCandidates(sD),
            LD = rD.filter((DD => DD.getBoundingClientRect().top >= KD)),
            cD = LD.length > 0 ? LD : rD,
            gD = Cw(cD.map((DD => DD.getBoundingClientRect())));
          DD.setFocus(gD >= 0 ? cD[gD] : null, {
            byUser: !0
          })
        })(DD, wD.root), !0)
      },
      zp = DD => {
        var zD, wD, pD;
        const sD = (0, oD.A)(DD);
        if (null !== sD) return sD;
        const KD = (null !== (zD = null !== (wD = null !== (pD = DD.getAttribute("aria-label")) && void 0 !== pD ? pD : DD.getAttribute("title")) && void 0 !== wD ? wD : DD.textContent) && void 0 !== zD ? zD : "").replace(/\s+/g, " ").trim();
        return KD ? `${DD.tagName}:${KD.slice(0,100)}` : null
      };
    class wp {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(DD) {
        const zD = this.history.indexOf(DD);
        if (zD >= 0) {
          for (const DD of this.history.splice(zD + 1)) this.remembered.delete(DD);
          return !0
        }
        return this.remembered.delete(DD), this.history.push(DD), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(DD) {
        this.remembered.delete(DD);
        const zD = this.history.indexOf(DD);
        zD >= 0 && this.history.splice(zD, 1)
      }
      remember(DD, zD, wD, pD) {
        const sD = zp(zD),
          KD = (0, oD.A)(zD),
          rD = null !== KD && ((DD, zD) => {
            let wD = 0;
            for (const pD of DD.querySelectorAll("[data-pad-key], [href]"))
              if ((pD.getAttribute("data-pad-key") === zD || pD.getAttribute("href") === zD) && (wD++, wD > 1)) return !0;
            return !1
          })(wD, KD) ? Math.max(0, this.twins(pD(), KD).indexOf(zD)) : 0;
        this.remembered.set(DD, {
          element: new WeakRef(zD),
          identity: sD,
          ordinal: rD
        })
      }
      has(DD) {
        return this.remembered.has(DD)
      }
      recall(DD, zD) {
        var wD, pD;
        const sD = this.remembered.get(DD);
        if (!sD) return null;
        const KD = sD.element.deref();
        if (KD && zD.includes(KD)) return KD;
        if (null === sD.identity) return null;
        const rD = this.twins(zD, sD.identity);
        return null !== (wD = null !== (pD = rD[sD.ordinal]) && void 0 !== pD ? pD : rD[0]) && void 0 !== wD ? wD : null
      }
      twins(DD, zD) {
        return DD.filter((DD => zp(DD) === zD))
      }
    }
    var pp = wD(1282);
    const sp = DD => {
        const zD = [];
        let wD = DD;
        for (; wD && wD !== document.body;) {
          const DD = getComputedStyle(wD).zIndex;
          "auto" !== DD && zD.push(Number(DD) || 0), wD = wD.parentElement
        }
        return zD.reverse()
      },
      Kp = (DD, zD) => {
        const wD = ((DD, zD) => {
          const wD = Math.max(DD.length, zD.length);
          for (let KD = 0; KD < wD; KD++) {
            var pD, sD;
            const wD = (null !== (pD = DD[KD]) && void 0 !== pD ? pD : 0) - (null !== (sD = zD[KD]) && void 0 !== sD ? sD : 0);
            if (0 !== wD) return wD
          }
          return 0
        })(sp(DD), sp(zD));
        if (0 !== wD) return wD > 0;
        if (DD.contains(zD)) return !1;
        if (zD.contains(DD)) return !0;
        const pD = DD.compareDocumentPosition(zD);
        return !!(pD & Node.DOCUMENT_POSITION_PRECEDING) || !(pD & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      rp = (DD, zD) => {
        var wD;
        return null !== (wD = Kp(DD.root, zD.root)) && void 0 !== wD ? wD : DD.order > zD.order
      },
      Lp = (DD, zD) => zD.some((zD => !zD.contains(DD) && !DD.contains(zD) && !0 === Kp(zD, DD)));
    let cp = null,
      gp = null,
      Rp = -1;
    const Ap = () => {
        var DD;
        const zD = null === (DD = document.timeline) || void 0 === DD ? void 0 : DD.currentTime,
          wD = "number" === typeof zD ? zD : null;
        if (null !== wD && wD === gp && Rp === (0, pp.c)()) return cp;
        let pD = null;
        const sD = [],
          KD = [...document.querySelectorAll("[data-pad-covers]")].filter(HD.r);
        for (const rD of (0, pp.g)()) {
          const DD = rD.getRoot(),
            zD = !!DD && (0, HD.r)(DD) && !Lp(DD, KD);
          if (rD.shown && !zD && sD.push(rD), rD.shown = zD, !DD || !zD) continue;
          const wD = {
            layer: rD,
            root: DD,
            order: rD.order
          };
          pD && !rp(wD, pD) || (pD = wD)
        }
        cp = pD, gp = wD, Rp = (0, pp.c)();
        for (const rD of sD)(0, pp.i)(rD);
        return cp
      },
      Up = () => {
        const DD = Ap();
        return !(null === DD || void 0 === DD || !DD.layer.close) && (DD.layer.close(), gp = null, !0)
      },
      fp = () => {
        var DD, zD;
        return null !== (DD = null === (zD = Ap()) || void 0 === zD ? void 0 : zD.root) && void 0 !== DD ? DD : null
      },
      Ip = DD => DD ? {
        ...DD,
        root: fp()
      } : null;
    let Bp = null,
      Gp = null,
      hp = (0, UD.g)().menuNavigation,
      np = null;
    const Mp = new JD;
    let Op = null;
    gD.l.subscribe(UD.d, (() => {
      const DD = (0, UD.g)().menuNavigation;
      DD !== hp && (hp = DD, Bp = null, Gp = null)
    }));
    const Jp = () => {
        var DD;
        return null !== (DD = Bp) && void 0 !== DD ? DD : (0, UD.g)().menuNavigation
      },
      Ep = DD => {
        if (Pp()) {
          if (np = Ip(DD), "hybrid" === Jp()) return Mp.lock(), void(Gp = Gp ? null : fp());
          Bp = "focus" === Jp() ? "cursor" : "focus"
        }
      },
      Qp = () => {
        const DD = np;
        return np = null, DD
      };
    let Xp = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Vp = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const wD = Xp.root === DD,
          pD = wD ? Xp.firstSeenMs : zD,
          sD = Xp.has || zD - pD > 1e3;
        return (!wD || !sD || zD - Xp.atMs > 250) && (Xp = {
          root: DD,
          firstSeenMs: pD,
          atMs: zD,
          has: (0, HD.j)(DD)
        }), Xp.has
      },
      Pp = () => {
        const DD = fp();
        return null !== DD && Vp(DD)
      },
      Cp = () => {
        const DD = Ap();
        return Gp && (null === DD || void 0 === DD ? void 0 : DD.root) !== Gp && (Gp = null), (DD => {
          let {
            mode: zD,
            hasLayer: wD,
            hasCandidates: pD,
            hybridCursorEngaged: sD
          } = DD;
          return wD ? "cursor" !== zD && pD() ? "hybrid" === zD && sD ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Jp(),
          hasLayer: null !== DD,
          hasCandidates: () => null !== DD && Vp(DD.root),
          hybridCursorEngaged: null !== Gp
        })
      },
      xp = () => "hybrid" === Jp() && Pp(),
      Tp = "pad-focused";
    var bp = wD(4568),
      jp = wD(5057);
    const dp = "[data-pad-destructive]",
      Sp = `${dp}, [data-pad-back]`,
      ip = DD => ({
        rect: DD.getBoundingClientRect(),
        destructive: DD.matches(dp),
        closes: null !== DD.closest("[data-pad-close-button]"),
        unavailable: DD.matches("[data-pad-unavailable]")
      }),
      lp = DD => {
        let {
          destructive: zD,
          closes: wD,
          unavailable: pD
        } = DD;
        return zD ? wD ? 2 : 3 : pD ? 1 : 0
      },
      Wp = DD => {
        let zD = -1;
        for (let wD = 0; wD < DD.length; wD++) {
          if (zD < 0) {
            zD = wD;
            continue
          }
          const pD = DD[wD],
            sD = DD[zD];
          lp(pD) === lp(sD) ? Pw(pD.rect, sD.rect) < 0 && (zD = wD) : lp(pD) < lp(sD) && (zD = wD)
        }
        return zD
      },
      Np = "[data-pad-tabs]",
      Zp = "[data-pad-tab]",
      yp = (DD, zD) => {
        const wD = DD.querySelector(`${Zp}[data-pad-selected='true']`);
        return wD && zD.includes(wD) ? wD : null
      },
      kp = (DD, zD) => {
        let wD = zD;
        for (let pD = zD.parentElement; pD && !pD.contains(DD); pD = pD.parentElement) wD = pD;
        return wD
      };
    class mp {
      constructor() {
        this.contentReturn = null
      }
      redirect(DD, zD, wD, pD) {
        var sD, KD;
        const rD = DD.closest(Np),
          LD = zD.closest(Np);
        var cD;
        if (LD && LD !== rD) return rD || (this.contentReturn = new WeakRef(DD)), null !== (cD = yp(LD, wD)) && void 0 !== cD ? cD : zD;
        if (!rD || LD) return zD;
        const gD = kp(DD, zD),
          RD = null === (sD = this.contentReturn) || void 0 === sD ? void 0 : sD.deref();
        return RD && gD.contains(RD) && wD.includes(RD) ? RD : null !== (KD = this.pickRegionStart(gD, CD(zD, "y", pD), wD)) && void 0 !== KD ? KD : zD
      }
      findTabContent(DD, zD, wD) {
        const pD = DD.closest(Np);
        if (!pD || !DD.matches(Zp) || pD.contains(zD)) return null;
        const sD = zD.closest(Np);
        if (sD && Number(sD.dataset.padTabs) <= Number(pD.dataset.padTabs)) return null;
        const KD = kp(DD, zD);
        return wD.some((DD => KD.contains(DD) && !DD.closest(Sp))) || !zD.closest(Sp) ? KD : null
      }
      pickContentStart(DD, zD, wD) {
        return this.contentReturn = null, this.pickRegionStart(DD, CD(DD, "y", wD), zD)
      }
      pickReplacedContentStart(DD, zD, wD, pD) {
        if (!zD.contains(DD)) return null;
        const sD = kp(zD, DD),
          KD = wD.filter((DD => zD.contains(DD) && !sD.contains(DD) && !DD.closest(Sp)));
        return 0 === KD.length ? null : (this.contentReturn = null, this.pickRegionStart(zD, CD(KD[0], "y", pD), KD))
      }
      backToStrip(DD, zD, wD) {
        if (DD.closest(Np)) return null;
        const pD = Ww(wD);
        for (const sD of wD.querySelectorAll(Np)) {
          if (Number(sD.dataset.padTabs) <= 1 || sD === pD) continue;
          const KD = yp(sD, zD),
            rD = KD ? kp(DD, sD).parentElement : null;
          if (KD && rD && rD !== wD && wD.contains(rD)) return this.contentReturn = new WeakRef(DD), KD
        }
        return null
      }
      pickRegionStart(DD, zD, wD) {
        const pD = SD(zD),
          sD = DD => {
            const zD = wD.filter((zD => DD.contains(zD) && !zD.closest(Np) && iD(zD.getBoundingClientRect(), pD))),
              sD = Wp(zD.map(ip));
            return sD >= 0 ? zD[sD] : null
          };
        for (const KD of (0, HD.g)(DD)) {
          const DD = sD(KD);
          if (DD) return DD
        }
        for (const KD of DD.querySelectorAll(Np)) {
          const DD = yp(KD, wD);
          if (DD) return DD
        }
        return sD(DD)
      }
    }
    const ep = "[data-pad-default-focus], .Dropdown-option.is-selected",
      op = ".Dropdown-root.is-open > .Dropdown-menu",
      ap = "[data-pad-no-step-in]",
      vp = "[data-pad-tabs]",
      tp = "[data-pad-press-area]",
      Fp = DD => {
        let zD = DD;
        for (let wD = 0; zD && wD <= 4; wD++, zD = zD.parentElement) {
          const wD = zD.querySelector(".CircleInfo");
          if (wD) return zD === DD || zD.querySelectorAll(HD.c).length <= 1 ? wD : null;
          if (zD !== DD && zD.querySelectorAll(HD.c).length > 1) return null
        }
        return null
      },
      Yp = (DD, zD, wD) => {
        (0, oD.o)(DD, zD, wD);
        const pD = null !== DD && void 0 !== DD && DD.isConnected ? Fp(DD) : null,
          sD = Fp(zD);
        pD !== sD && (0, oD.o)(pD, sD, sD ? (0, oD.w)(sD) : wD, {
          leaveBelow: DD,
          enterBelow: zD
        })
      },
      Hp = DD => DD.getBoundingClientRect(),
      qp = (DD, zD, wD) => {
        const pD = new Set(wD);
        for (let sD = DD; sD; sD = sD === zD ? null : sD.parentElement)
          if (pD.has(sD)) return sD;
        return null
      },
      Ds = (DD, zD) => !DD.root || DD.root === zD || zD.matches(op) && DD.root.contains(zD);
    const zs = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new wp, this.tabStripNav = new mp, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, BD.b)(ID.q), this.dpadRepeats = new Map(ID.w.map((DD => [DD, (0, BD.b)(ID.z)]))), this.stickRepeat = new ID.e((0, BD.b)(ID.Y)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const DD = AD.e.register({
            name: "focus",
            isActive: () => (0, fD.o)() && "focus" === Cp(),
            onFrame: DD => {
              this.onFrame(DD)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: DD => (0, AD.h)(DD) || DD === (0, RD.g)("menuConfirm") && (0, oD.G)((0, fD.e)())
          }),
          zD = (0, pp.m)((DD => {
            const zD = (0, pp.r)(DD);
            null === DD.memoryKey && this.memory.forget(zD), zD === this.layerKey && (this.layerKey = null)
          }));
        let wD = -1 / 0;
        const pD = rD.g.onFrame((DD => {
            (0, fD.o)() || DD.timestampMs - wD < 100 || (wD = DD.timestampMs, Ap())
          })),
          sD = DD => {
            DD.isTrusted && DD.target instanceof Element && rD.g.getActivePad() && this.noteChosenStop(DD.target)
          };
        return document.addEventListener("click", sD, !0), () => {
          DD(), zD(), pD(), document.removeEventListener("click", sD, !0), this.deactivate()
        }
      }
      noteChosenStop(DD) {
        var zD, wD;
        const pD = Ap();
        if (!pD || !pD.root.contains(DD)) return;
        const sD = null !== (zD = null === (wD = DD.closest(".Dropdown-root")) || void 0 === wD ? void 0 : wD.querySelector(".Dropdown-control")) && void 0 !== zD ? zD : DD,
          KD = qp(sD, pD.root, this.getEnabledCandidates(pD.root));
        if (!KD) return;
        const rD = (0, pp.r)(pD.layer);
        rD === this.layerKey && pD.root === this.layerRoot || this.beginLayer(pD, rD), this.wasActive ? this.setFocus(KD, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = KD, this.lastFocusedCentre = (0, oD.w)(KD), this.rememberFocus(KD), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      deactivate() {
        var DD;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const DD of this.dpadRepeats.values()) DD.reset();
          this.stickRepeat.reset(), null !== (DD = this.focused) && void 0 !== DD && DD.isConnected && Yp(this.focused, null, (0, oD.w)(this.focused)), this.notify()
        }
      }
      setFocus(DD) {
        var zD;
        let {
          scroll: wD = !0,
          byUser: pD = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (pD && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), DD === this.focused) return;
        const sD = null !== (zD = this.focused) && void 0 !== zD && zD.isConnected ? this.focused : null;
        if (this.focused = DD, DD) {
          wD && (DD.classList.add(Tp), DD.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), pD && ((DD, zD) => {
            const wD = zD.closest("[data-pad-friends-column]");
            wD && DD && !wD.contains(DD) && (ew = new WeakRef(DD))
          })(sD, DD);
          const zD = (0, oD.w)(DD);
          this.lastFocusedCentre = zD, this.movedInLayer && this.rememberFocus(DD), Yp(sD, DD, zD), "false" === DD.getAttribute("aria-pressed") && DD.closest("[data-pad-select-on-focus]") && (0, oD.c)(DD)
        } else sD && Yp(sD, null, (0, oD.w)(sD));
        this.notify()
      }
      rememberFocus(DD) {
        const zD = this.layerRoot;
        this.layerKey && zD && this.memory.remember(this.layerKey, DD, zD, (() => this.getEnabledCandidates(zD)))
      }
      noteCursorActivation(DD) {
        const zD = Ap();
        if (!zD || !zD.root.contains(DD)) return;
        const wD = this.getEnabledCandidates(zD.root),
          pD = new Set(wD);
        let sD = DD;
        for (; sD && !pD.has(sD);) sD = sD === zD.root ? null : sD.parentElement;
        if (!(sD instanceof HTMLElement)) return;
        const KD = (0, pp.r)(zD.layer);
        this.memory.enter(KD), this.memory.remember(KD, sD, zD.root, (() => wD))
      }
      notePageEnteredByCursor(DD) {
        return this.memory.enter(DD)
      }
      recallStop(DD, zD) {
        return this.findRemembered(DD, zD)
      }
      focusWhenFound(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: DD,
          untilMs: performance.now() + zD,
          holdWhile: wD
        }
      }
      getEnabledCandidates(DD) {
        return (0, HD.e)(DD).filter((DD => !(0, HD.u)(DD)))
      }
      onFrame(DD) {
        var zD;
        const wD = Ap();
        if (!wD) return;
        const pD = null !== (zD = this.findOpenDropdown(wD)) && void 0 !== zD ? zD : wD,
          sD = performance.now(),
          KD = (0, pp.r)(pD.layer);
        if (KD !== this.layerKey || pD.root !== this.layerRoot) {
          const zD = this.focused;
          if (null !== this.layerKey && pD.root === this.layerRoot && zD && (0, HD.t)(zD, pD.root)) this.continueLayer(KD, zD), this.wasActive || this.resume(pD.root, sD);
          else {
            const zD = !this.wasActive && !DD.wokeDevice,
              rD = "death" === this.layerKind || zD,
              LD = this.enterLayer(pD, KD);
            "popup" !== pD.layer.kind || pD !== wD || LD ? "menu" === pD.layer.kind && rD && "inGame" === cD.e.get("gameState") && !(0, rw.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = sD + bp.e) : (this.pressGuardExtends = zD, this.pressGuardUntilMs = sD + (zD ? bp.e : rD ? 500 : 250))
          }
        } else this.wasActive || this.resume(pD.root, sD);
        if (this.layerKind = pD.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), DD.wokeDevice && this.focusPointedStop(pD.root), this.validateFocus(pD, sD), sD < this.pressGuardUntilMs && this.pressGuardExtends && (DD.wasPressed((0, RD.g)("menuConfirm")) || DD.wasPressed((0, RD.g)("menuBack"))) && (this.pressGuardUntilMs = sD + bp.e), sD >= this.pressGuardUntilMs && this.handleButtons(DD, pD)) return;
        const rD = "hybrid" === Jp();
        if (rD && (DD => {
            const zD = fp();
            return zD !== Op && (Op = zD, Mp.lock()), Mp.update(DD, (0, UD.g)().moveDeadzone)
          })(DD.leftStick)) return LD = this.getHandoff(), np = Ip(LD), Gp = fp(), void AD.e.handOffHeldInput();
        var LD;
        this.handleDirections(DD, pD, sD, !rD), this.handleScroll(DD, pD)
      }
      findOpenDropdown(DD) {
        const zD = DD.root.querySelector(op);
        if (!zD || !(0, HD.r)(zD)) return null;
        let wD = this.dropdownLayers.get(zD);
        return wD || (this.dropdownLayerCounter++, wD = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: DD.layer.kind,
          getRoot: () => zD,
          close: () => {
            (0, oD.j)(zD)
          },
          memoryKey: null
        }, this.dropdownLayers.set(zD, wD)), {
          layer: wD,
          root: zD,
          order: DD.order
        }
      }
      focusPointedStop(DD) {
        const zD = (0, fD.e)(),
          wD = zD ? document.elementFromPoint(zD.x, zD.y) : null;
        if (!wD || !DD.contains(wD)) return;
        const pD = qp(wD, DD, this.getEnabledCandidates(DD));
        pD && this.setFocus(pD, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(DD, zD) {
        const wD = this.beginLayer(DD, zD),
          pD = Qp();
        return pD && Ds(pD, DD.root) ? (this.takeOver(DD.root, pD, this.enteredLayerAtMs), wD) : (this.restoreLayerFocus(DD.root, wD), wD)
      }
      beginLayer(DD, zD) {
        return this.layerKey = zD, this.layerRoot = DD.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(zD)
      }
      restoreLayerFocus(DD, zD) {
        const wD = zD && this.layerKey ? this.findRemembered(DD, this.layerKey) : null;
        this.restoredFromMemory = null !== wD, this.setFocus(null !== wD && void 0 !== wD ? wD : this.pickInitial(DD, {
          waitForContent: !0
        }))
      }
      continueLayer(DD, zD) {
        this.layerKey = DD;
        const wD = this.memory.enter(DD);
        this.restoreOnFocusLoss = wD, this.movedInLayer && !wD && this.rememberFocus(zD)
      }
      resume(DD, zD) {
        var wD;
        const pD = Qp();
        pD && Ds(pD, DD) ? this.takeOver(DD, pD, zD) : null !== (wD = this.focused) && void 0 !== wD && wD.isConnected && Yp(null, this.focused, (0, oD.w)(this.focused))
      }
      pickPreferred(DD) {
        var zD;
        return null !== (zD = this.layerKey ? this.findRemembered(DD, this.layerKey) : null) && void 0 !== zD ? zD : this.pickInitial(DD, {
          waitForContent: !0
        })
      }
      findRemembered(DD, zD) {
        return this.memory.has(zD) ? this.memory.recall(zD, this.getEnabledCandidates(DD)) : null
      }
      getHandoff() {
        var DD, zD, wD;
        const pD = null !== (DD = this.focused) && void 0 !== DD && DD.isConnected ? this.focused : null,
          sD = null !== (zD = this.layerRoot) && void 0 !== zD && zD.isConnected ? this.layerRoot : null;
        return {
          point: pD ? (0, oD.w)(pD) : null !== (wD = this.lastFocusedCentre) && void 0 !== wD ? wD : this.getLayerStartPoint(sD),
          element: pD,
          direction: null
        }
      }
      getLayerStartPoint(DD) {
        if (!DD) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const zD = this.pickInitial(DD, {
          includeDisabled: !0
        });
        return (0, oD.w)(null !== zD && void 0 !== zD ? zD : DD)
      }
      takeOver(DD, zD, wD) {
        const {
          element: pD,
          direction: sD,
          point: KD
        } = zD, rD = pD instanceof HTMLElement && (0, HD.t)(pD, DD) ? pD : null;
        if (!sD) {
          const zD = this.focused;
          return rD ? this.setFocus(rD, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(DD, KD), void(this.focused && this.focused === zD && this.focused.isConnected && Yp(null, this.focused, (0, oD.w)(this.focused)))
        }
        if (this.dpadRepeats.get(sD).update(!0, wD), rD) return this.setFocus(rD, {
          scroll: !1,
          byUser: !0
        }), void this.move(DD, sD, wD, !0);
        const LD = this.getEnabledCandidates(DD),
          cD = LD.map(Hp),
          gD = Ow(new DOMRect(KD.x, KD.y, 0, 0), cD, sD),
          RD = gD >= 0 ? gD : Vw(KD, cD);
        this.setFocus(RD >= 0 ? LD[RD] : this.pickInitial(DD), {
          byUser: !0
        })
      }
      focusNearest(DD, zD) {
        const wD = this.getEnabledCandidates(DD),
          pD = Vw(zD, wD.map(Hp));
        this.setFocus(pD >= 0 ? wD[pD] : this.pickInitial(DD), {
          byUser: !0
        })
      }
      pickDefault(DD) {
        let {
          includeDisabled: zD = !1,
          exclude: wD = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const pD = [...DD.querySelectorAll(ep)].filter((pD => (null === wD || void 0 === wD || !wD.has(pD)) && (zD ? (0, HD.w)(pD, DD) : (0, HD.t)(pD, DD)))),
          sD = Wp(pD.map(ip));
        return sD >= 0 ? pD[sD] : null
      }
      pickNewAreaStart(DD, zD) {
        const wD = [...DD.querySelectorAll(tp)].filter(HD.r);
        for (const pD of [...(0, HD.g)(DD), ...wD]) {
          if (zD.has(pD)) continue;
          const DD = this.getEnabledCandidates(pD),
            wD = Wp(DD.map(ip));
          if (wD >= 0) return DD[wD]
        }
        return null
      }
      pickInitial(DD) {
        let {
          includeDisabled: zD = !1,
          waitForContent: wD = !1,
          enteredAtMs: pD = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sD = this.pickDefault(DD, {
          includeDisabled: zD
        });
        if (sD) return sD;
        const KD = DD => zD ? (0, HD.e)(DD) : this.getEnabledCandidates(DD);
        let rD = [];
        for (const UD of (0, HD.g)(DD))
          if (rD = KD(UD), rD.length > 0) break;
        if (0 === rD.length) {
          if (wD && performance.now() - pD < 1e4 && (0, HD.n)(DD)) return null;
          rD = KD(DD)
        }
        const LD = rD.map(Hp),
          cD = SD(null),
          gD = rD.filter(((DD, zD) => iD(LD[zD], cD))),
          RD = gD.length > 0 ? gD : rD,
          AD = Wp(RD.map(ip));
        return AD >= 0 ? RD[AD] : null
      }
      validateFocus(DD, zD) {
        if (this.pendingFocus) {
          var wD, pD;
          const sD = this.pendingFocus.find();
          if (sD && (0, HD.t)(sD, DD.root)) return this.pendingFocus = null, void this.setFocus(sD, {
            byUser: !0
          });
          zD > this.pendingFocus.untilMs && (null === (wD = (pD = this.pendingFocus).holdWhile) || void 0 === wD || !wD.call(pD)) && (this.pendingFocus = null)
        }
        const sD = this.focused,
          KD = !!sD && (0, HD.t)(sD, DD.root);
        if (!(!KD && sD && sD === this.lastActivated && zD - this.lastActivatedAtMs < 5e3 && DD.root.contains(sD) && (0, HD.r)(sD) && (0, HD.u)(sD))) {
          if (!KD && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = zD, void this.restoreLayerFocus(DD.root, !0);
          if ((!KD || !this.movedInLayer && !this.scrolledInLayer) && !(zD - this.lastRefocusCheckMs < (KD ? 200 : 50)))
            if (this.lastRefocusCheckMs = zD, KD) {
              const wD = zD - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(DD.root) : null,
                pD = null !== wD && void 0 !== wD ? wD : this.restoredFromMemory ? null : this.pickDefault(DD.root);
              pD && pD !== sD && this.setFocus(pD)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const zD = this.pendingFocus;
                return this.focusNearest(DD.root, this.lastFocusedCentre), void(this.pendingFocus = zD)
              }
              this.setFocus(this.pickPreferred(DD.root))
            }
        }
      }
      handleButtons(DD, zD) {
        if (DD.wasPressed((0, RD.g)("menuToggleCursor"))) return Ep(this.getHandoff()), !0;
        if (DD.wasPressed((0, RD.g)("menuBack"))) {
          const DD = (0, oD.j)(zD.root);
          return DD ? this.setFocus(DD, {
            byUser: !0
          }) : ow(this, zD.root) || ((0, oD.d)(zD.root) ? this.returnToOpener(zD.root) : this.backToStrip(zD.root) || Up()), !0
        }
        const wD = (0, RD.g)("menuConfirm");
        var pD, sD;
        DD.wasPressed(wD) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (pD = null === (sD = this.focused) || void 0 === sD ? void 0 : sD.getAttribute("data-pad-repeat")) && void 0 !== pD ? pD : null, this.confirmRepeated = DD.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (DD.wasReleased(wD)) {
          const DD = this.confirmPressedOn;
          if (this.confirmPressedOn = null, DD && !this.confirmRepeated && DD === this.focused && DD.isConnected && !(0, HD.u)(DD)) {
            const wD = DD.matches("[data-pad-tab]") ? DD.closest(vp) : null;
            wD ? this.enterTab(DD, wD, zD.root, performance.now()) : this.activate(DD)
          }
          return !0
        }
        return this.repeatConfirm(DD, wD), Dp(this, DD, zD)
      }
      repeatConfirm(DD, zD) {
        const wD = this.confirmPressedOn;
        wD && null !== this.confirmRepeatKey && DD.isHeld(zD) && (wD === this.focused && wD.isConnected && !(0, HD.u)(wD) && wD.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? wD.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(wD)) : this.confirmRepeatKey = null)
      }
      backToStrip(DD) {
        const zD = this.focused;
        if (!(0, UD.g)().menuBackToCategories) return !1;
        const wD = null !== zD && void 0 !== zD && zD.isConnected ? this.tabStripNav.backToStrip(zD, this.getEnabledCandidates(DD), DD) : null;
        return wD && this.setFocus(wD, {
          byUser: !0
        }), null !== wD
      }
      returnToOpener(DD) {
        const zD = this.lastActivatedKey;
        zD && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var wD;
          return null !== (wD = this.getEnabledCandidates(DD).find((DD => (0, oD.A)(DD) === zD))) && void 0 !== wD ? wD : null
        })))
      }
      activate(DD) {
        var zD;
        if ((0, jp.b)(DD) || (0, oD.D)(DD)) return;
        this.lastActivatedKey = null !== (zD = (0, oD.A)(DD)) && void 0 !== zD ? zD : this.lastActivatedKey, this.lastActivated = DD, this.lastActivatedAtMs = performance.now(), this.rememberFocus(DD);
        const wD = this.layerRoot;
        if (wD) {
          const zD = new Set(wD.querySelectorAll(ep)),
            pD = new Set(wD.querySelectorAll(`[data-pad-initial-area], ${tp}`)),
            sD = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var sD;
            return (0, HD.t)(DD, wD) ? null : null !== (sD = this.pickDefault(wD, {
              exclude: zD
            })) && void 0 !== sD ? sD : this.pickNewAreaStart(wD, pD)
          }), 5e3, (() => DD.isConnected && (0, HD.u)(DD) && performance.now() - sD < 6e4))
        }(0, oD.c)(DD), (0, oD.f)(DD)
      }
      handleDirections(DD, zD, wD, pD) {
        const sD = jw(zD.layer.kind) ? (0, RD.g)("chat") : null;
        for (const LD of ID.w) {
          this.dpadRepeats.get(LD).update(DD.isHeld(LD), wD) && (LD !== sD || DD.wasPressed(LD)) && this.move(zD.root, LD, wD, !0)
        }
        const KD = pD ? (0, ID.i)(DD.leftStick, (0, UD.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          rD = this.stickRepeat.update((0, ID.ab)(KD), wD);
        if (rD && this.move(zD.root, rD, wD, !0), this.retryMove && wD >= this.retryMove.atMs) {
          const {
            direction: DD
          } = this.retryMove;
          this.retryMove = null, this.move(zD.root, DD, wD, !1)
        }
      }
      move(DD, zD, wD, pD) {
        var sD;
        let KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (sD = this.tabOpenWait) || void 0 === sD ? void 0 : sD.wait) && zD === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const rD = this.focused;
        if (!rD || !rD.isConnected) {
          const zD = this.pickInitial(DD);
          return void(zD && this.setFocus(zD, {
            byUser: !0
          }))
        }
        const LD = "Left" === zD || "Right" === zD,
          cD = LD ? (0, jp.b)(rD) : null;
        if (cD) return void cD.adjust("Left" === zD ? -1 : 1);
        const gD = DD => null !== DD.closest("[data-pad-friends-column]"),
          RD = gD(rD),
          AD = Hp(rD),
          UD = LD || rD.closest(vp) ? null : (DD => {
            const zD = new Map;
            return wD => {
              const pD = wD.closest(vp);
              if (!pD) return !1;
              let sD = zD.get(pD);
              if (void 0 === sD) {
                const wD = Hp(pD);
                sD = Mw(DD, wD) && (wD.right <= DD.left || wD.left >= DD.right), zD.set(pD, sD)
              }
              return sD
            }
          })(AD),
          fD = null !== rD.closest(ap),
          ID = this.getEnabledCandidates(DD).filter((DD => DD !== rD && (LD || gD(DD) === RD) && !(null !== UD && void 0 !== UD && UD(DD)) && (fD || !DD.closest(ap)))),
          BD = ID.map(Hp),
          GD = CD(rD, "y", DD),
          hD = SD(GD);
        if (!KD && !iD(AD, hD)) {
          const DD = ID.filter(((DD, zD) => iD(BD[zD], hD)));
          if (DD.length > 0) {
            const zD = {
              x: hD.left + hD.width / 2,
              y: hD.top + hD.height / 2
            };
            return void this.setFocus(DD[Vw(zD, DD.map(Hp))], {
              byUser: !0
            })
          }
        }
        const nD = LD ? ((DD, zD, wD) => {
            const pD = Hp(DD),
              sD = DD.closest(vp),
              KD = sD ? Hp(sD) : null;
            return zD.map(((zD, rD) => {
              const LD = wD[rD];
              if (LD.bottom > pD.top && LD.top < pD.bottom) return !0;
              const cD = zD.closest(vp);
              if (sD && KD) return cD !== sD && (null !== cD || LD.bottom <= KD.top || LD.top >= KD.bottom);
              if (cD) return !Mw(pD, Hp(cD));
              let gD = DD;
              for (let wD = DD.parentElement; wD && !wD.contains(zD); wD = wD.parentElement) gD = wD;
              const RD = Hp(gD);
              return LD.right > RD.left && LD.left < RD.right
            }))
          })(rD, ID, BD) : void 0,
          MD = LD && !rD.closest(vp) ? (DD => DD.map((DD => !DD.closest(Sp))))(ID) : void 0,
          OD = ((DD, zD) => {
            const wD = [];
            for (let sD = DD; sD; sD = sD.parentElement) wD.push(sD);
            const pD = new Map;
            return wD.forEach(((DD, zD) => {
              pD.set(DD, wD.length - 1 - zD)
            })), zD.map((DD => {
              for (let zD = DD; zD; zD = zD.parentElement) {
                const DD = pD.get(zD);
                if (void 0 !== DD) return DD
              }
              return -1
            }))
          })(rD, ID),
          JD = LD ? "x" : "y",
          ED = CD(rD, JD, DD);
        let QD = Ow(AD, BD, zD, OD, nD, MD);
        if (QD >= 0 && ED && !ED.contains(ID[QD])) {
          const DD = ID.flatMap(((DD, zD) => ED.contains(DD) ? [zD] : [])),
            wD = zD => zD && DD.map((DD => zD[DD])),
            pD = Ow(AD, DD.map((DD => BD[DD])), zD, DD.map((DD => OD[DD])), wD(nD), wD(MD));
          QD = pD >= 0 ? DD[pD] : QD
        }
        if (QD >= 0) return void this.moveTo(rD, ID[QD], ID, DD, zD, KD);
        if (!pD) return;
        const XD = "Right" === zD || "Down" === zD ? 1 : -1;
        if (ED && jD(ED, JD, XD)) {
          const DD = "y" === JD ? ED.clientHeight : ED.clientWidth;
          dD(ED, JD, XD * DD * .5), this.retryMove = {
            direction: zD,
            atMs: wD + 80
          }
        }
      }
      moveTo(DD, zD, wD, pD, sD, KD) {
        const rD = this.tabStripNav.findTabContent(DD, zD, wD);
        rD && "true" !== DD.dataset.padSelected ? this.openTab(DD, rD, pD, sD) : KD && !rD || this.setFocus(this.tabStripNav.redirect(DD, zD, wD, pD), {
          byUser: !0
        })
      }
      openTab(DD, zD, wD, pD) {
        const sD = zD.parentElement;
        (0, oD.c)(DD), this.focusWhenFound((() => "true" !== DD.dataset.padSelected ? null : zD.isConnected ? this.tabStripNav.pickContentStart(zD, this.getEnabledCandidates(wD), wD) : sD ? this.tabStripNav.pickReplacedContentStart(DD, sD, this.getEnabledCandidates(wD), wD) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: pD
        }
      }
      enterTab(DD, zD, wD, pD) {
        this.move(wD, (DD => {
          const zD = [...DD.querySelectorAll(Zp)].filter((zD => zD.closest(Np) === DD));
          if (zD.length >= 2) {
            const DD = zD[0].getBoundingClientRect(),
              wD = zD[1].getBoundingClientRect();
            return Math.abs(wD.top - DD.top) > Math.abs(wD.left - DD.left) ? "Right" : "Down"
          }
          const wD = DD.getBoundingClientRect();
          return wD.height > wD.width ? "Right" : "Down"
        })(zD), pD, !1, !0), this.focused !== DD || this.pendingFocus || this.activate(DD)
      }
      handleScroll(DD, zD) {
        const wD = (0, ID.i)(DD.rightStick, .2);
        if (0 === wD.x && 0 === wD.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const pD = DD.dtMs / 1e3;
        for (const KD of ["x", "y"]) {
          var sD;
          const DD = wD[KD];
          if (0 === DD) continue;
          const rD = null !== (sD = CD(this.focused, KD, zD.root)) && void 0 !== sD ? sD : TD(zD.root, KD);
          if (!rD) continue;
          const LD = Math.sign(DD) * DD * DD * 1500 * pD + this.scrollRemainder[KD],
            cD = Math.trunc(LD);
          this.scrollRemainder[KD] = LD - cD, 0 !== cD && (dD(rD, KD, cD), this.scrolledInLayer = !0)
        }
      }
    };
    var ws = wD(8237);
    var ps = wD(8740);
    const ss = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Ks = {
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
          ...ss,
          minIntervalMs: 1e3
        },
        preview: {
          ...ss,
          minIntervalMs: 0
        }
      };
    const rs = new class {
        constructor(DD) {
          this.deps = DD, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = DD => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", DD))
          }
        }
        play(DD, zD) {
          const wD = Ks[DD];
          if (!this.deps.isVibrationOn() || wD.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const pD = this.lastPlayedMs[DD];
          if (void 0 !== pD && zD - pD < wD.minIntervalMs) return !1;
          const sD = this.deps.getActuator();
          if (!sD) return !1;
          this.lastPlayedMs[DD] = zD;
          const {
            duration: KD,
            strongMagnitude: rD,
            weakMagnitude: LD
          } = wD;
          try {
            sD.playEffect("dual-rumble", {
              duration: KD,
              strongMagnitude: rD,
              weakMagnitude: LD
            }).catch(this.logFailure)
          } catch (cD) {
            this.logFailure(cD)
          }
          return !0
        }
      }({
        getActuator: () => (DD => {
          const zD = null === DD || void 0 === DD ? void 0 : DD.vibrationActuator;
          return "function" === typeof(null === zD || void 0 === zD ? void 0 : zD.playEffect) ? zD : null
        })(rD.g.getActiveGamepad()),
        isVibrationOn: () => (0, UD.g)().vibration,
        isPadInUse: fD.o
      }),
      Ls = DD => {
        rs.play(DD, performance.now())
      };
    var cs = wD(8243),
      gs = wD(2901),
      Rs = wD(116),
      As = wD(35),
      Us = wD(655);
    class fs {
      constructor(DD) {
        this.deps = DD
      }
      check() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const zD = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!zD) return "skipped";
        const wD = DD ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === wD || this.deps.readReportedVisitId() === wD ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(wD), this.deps.sI(zD, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Is = "controllerUsageReportedVisit";
    var Bs = wD(1355),
      Gs = wD(1737),
      hs = wD(638),
      ns = wD(1442),
      Ms = wD(1260);
    const Os = DD => ({
        translationKey: `controller:${DD}`
      }),
      Es = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Os("padButtonView"),
        Menu: Os("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Os("padButtonDpadUp"),
        Down: Os("padButtonDpadDown"),
        Left: Os("padButtonDpadLeft"),
        Right: Os("padButtonDpadRight"),
        Home: Os("padButtonHome"),
        LeftStick: Os("padButtonLeftStick"),
        RightStick: Os("padButtonRightStick")
      },
      Qs = {
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
          View: Os("padButtonCreate"),
          Menu: Os("padButtonOptions")
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
      Xs = (DD, zD) => {
        var wD;
        const pD = null !== (wD = Qs[DD][zD]) && void 0 !== wD ? wD : Es[zD];
        return "string" === typeof pD ? pD : (0, sD.z)(Ms.e.get().getCurrentLanguageCode(), pD.translationKey)
      },
      Vs = DD => {
        let {
          glyph: zD,
          family: wD,
          className: pD
        } = DD;
        const sD = (0, fD.G)(),
          KD = null !== wD && void 0 !== wD ? wD : sD,
          rD = (0, cs.f)(KD, zD);
        return (0, ZD.jsx)("span", {
          className: ND()("ControllerGlyph", pD),
          role: "img",
          "aria-label": Xs(KD, zD),
          style: {
            "--pad-glyph-mask": `url(${rD})`,
            "--pad-glyph-aspect": (0, cs.e)(KD, zD)
          }
        })
      };
    var Ps = wD(1895);
    const Cs = DD => {
      let {
        action: zD
      } = DD;
      const {
        t: wD
      } = (0, sD.E)();
      switch (zD.kind) {
        case "reload":
          return (0, ZD.jsx)("span", {
            children: wD("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, ZD.jsx)(Ps.e, {
            text: zD.description ? [{
              icon: zD.icon
            }, ` ${zD.description}`] : [{
              icon: zD.icon
            }]
          });
        case "touchButton":
          return (0, ZD.jsx)(Ps.e, {
            text: zD.label
          })
      }
    };
    var xs = wD(8745);
    const Ts = DD => {
      let {
        hold: zD
      } = DD;
      return (0, ZD.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${zD.holdMs}ms`
        },
        children: (0, ZD.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, zD.id)
    };
    var bs = wD(8768),
      ds = wD(8776),
      Ss = wD(8779),
      is = wD(8765);
    const ls = () => {
        const {
          gameState: DD
        } = (0, cD.n)(["gameState"]), zD = (0, fD.D)(), [pD, sD] = (0, lD.useState)(!1), [KD, rD] = (0, lD.useState)(!1);
        return (0, lD.useEffect)((() => {
          "inGame" === DD && sD(!0)
        }), [DD]), (0, lD.useEffect)((() => {
          if (!pD) return;
          let DD = null,
            zD = !1;
          return (hs.v ? Promise.all([wD.e(72), wD.e(89), wD.e(269), wD.e(189), wD.e(224), wD.e(223), wD.e(88)]).then((() => wD(40461))).then((DD => DD.startWasmPadGameplay)) : Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(96), wD.e(75), wD.e(74), wD.e(73), wD.e(185), wD.e(228), wD.e(77), wD.e(89), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(211), wD.e(86), wD.e(241), wD.e(76), wD.e(119), wD.e(242), wD.e(224), wD.e(158)]).then((() => wD(40585))).then((DD => DD.startPadGameplay))).then((wD => {
            zD || (DD = wD())
          })).catch((DD => {
            console.error("Pad gameplay failed to load", DD), zD || rD(!0)
          })), () => {
            var wD;
            zD = !0, null === (wD = DD) || void 0 === wD || wD()
          }
        }), [pD]), (0, lD.useEffect)((() => {
          KD && zD && (rD(!1), Bs.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((DD => {
            !0 === DD && (0, Gs.reloadBloxd)()
          })))
        }), [KD, zD]), (0, ZD.jsxs)(ZD.Fragment, {
          children: [(0, ZD.jsx)(Ws, {}), (0, ZD.jsx)(Ns, {}), (0, ZD.jsx)(Zs, {})]
        })
      },
      Ws = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, fD.D)(), {
          gameState: wD,
          isUiHidden: pD
        } = (0, cD.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: KD
        } = (0, UD.n)(), rD = (0, xs.j)(), LD = (0, xs.k)(), [gD, AD] = (0, lD.useState)(Ss.d);
        return (0, ns.g)(is.m, AD), !zD || KD || pD || "inGame" !== wD || !rD && !gD ? null : (0, ZD.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [rD && (0, ZD.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ZD.jsx)(Vs, {
              glyph: (0, RD.g)("actionButton")
            }), (0, ZD.jsx)(Cs, {
              action: rD
            }), LD && (0, ZD.jsx)("span", {
              className: "PadActionHintMore",
              children: DD("controller:gameplayActionWheelHint")
            })]
          }), gD && (0, ZD.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ZD.jsx)(Vs, {
              glyph: (0, RD.g)("pickBlock")
            }), (0, ZD.jsx)("span", {
              children: DD("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ns = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, fD.D)(), {
          gameState: wD,
          isUiHidden: pD
        } = (0, cD.n)(["gameState", "isUiHidden"]), [KD, rD] = (0, lD.useState)(bs.d);
        return (0, ns.g)(is.j, rD), zD && !pD && "inGame" === wD && KD ? (0, ZD.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, ZD.jsx)("span", {
            children: DD("controller:gameplayDropStack")
          }), (0, ZD.jsx)(Ts, {
            hold: KD
          })]
        }) : null
      },
      Zs = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, fD.D)(), {
          gameState: wD,
          isUiHidden: pD
        } = (0, cD.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: KD
        } = (0, UD.n)(), [rD, LD] = (0, lD.useState)(ds.e);
        return (0, ns.g)(is.i, LD), zD && !pD && "inGame" === wD && rD ? (0, ZD.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!KD && (0, ZD.jsx)(Vs, {
            glyph: (0, RD.g)("attack")
          }), (0, ZD.jsx)("span", {
            children: DD("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var ys = wD(8785),
      ks = wD(1956),
      ms = wD(2402),
      es = wD(8223);
    const os = DD => DD && !(0, ys.e)(ks.e.get("shopInfo")),
      as = () => {
        const DD = "inGame" === (0, cD.n)(["gameState"]).gameState;
        return (0, ms.g)("shopInfo", (() => {
          (0, es.h)(os(DD))
        })), (0, lD.useEffect)((() => {
          (0, es.h)(os(DD))
        }), [DD]), null
      },
      us = () => {
        const {
          t: DD
        } = (0, sD.E)(), {
          hideButtonHints: zD
        } = (0, UD.n)();
        (0, fD.G)();
        const wD = (0, Nz.i)();
        return (0, lD.useEffect)((() => (() => {
          const DD = AD.e.register({
              name: "inventory",
              isActive: sw.isActive,
              onFrame: sw.onFrame,
              onDeactivate: sw.onDeactivate,
              wakePressActs: sw.wakePressActs
            }),
            zD = DD => {
              sw.noteRealPointer(DD), sw.shouldBlockRealPointer(DD) && DD.stopPropagation()
            };
          for (const rD of Kw) window.addEventListener(rD, zD, !0);
          const wD = (0, YD.h)((() => {
              "inventory" !== AD.e.getActiveConsumerName() && sw.forgetSurface()
            })),
            pD = DD => {
              const zD = DD.target;
              (0, fD.o)() && (0, vD.i)(zD) && zD.closest(Jz) && (0, YD.e)() && (0, YD.n)(zD)
            };
          document.addEventListener("focusout", pD, !0);
          const {
            invalidate: sD,
            onScroll: KD
          } = sw.targets;
          return document.addEventListener("scroll", KD, !0), window.addEventListener("resize", sD), () => {
            DD(), wD();
            for (const DD of Kw) window.removeEventListener(DD, zD, !0);
            document.removeEventListener("scroll", KD, !0), document.removeEventListener("focusout", pD, !0), window.removeEventListener("resize", sD), sw.targets.disconnect()
          }
        })()), []), (0, ZD.jsxs)(ZD.Fragment, {
          children: [(0, ZD.jsx)(eD, {
            placer: sw.ring,
            className: "InventorySlotCursorRing"
          }), wD.showing && !zD && (0, ZD.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: FD(wD).map((zD => {
              let {
                actions: pD,
                labelKey: sD
              } = zD;
              return (0, ZD.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [pD.map((DD => (0, ZD.jsx)(Vs, {
                  glyph: (0, RD.g)(DD)
                }, DD))), (0, ZD.jsx)("span", {
                  children: DD(`controller:${sD}`)
                }), "inventoryDrop" === sD && wD.dropStackHold && (0, ZD.jsx)(Ts, {
                  hold: wD.dropStackHold
                })]
              }, sD)
            }))
          })]
        })
      },
      vs = [{
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
      ts = DD => Array.from(DD).map((DD => ({
        type: "char",
        char: DD,
        width: 1
      }))),
      Fs = function(DD) {
        return {
          type: "command",
          command: DD,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Ys = [Fs("page", 2), Fs("otherPage"), Fs("caretLeft"), Fs("space", 3), Fs("caretRight"), Fs("close", 1.5), Fs("submit", 1.5)],
      Hs = [Fs("page", 2), Fs("otherPage"), Fs("caretLeft"), Fs("space", 2), Fs("caretRight"), Fs("newline"), Fs("close", 1.5), Fs("submit", 1.5)],
      qs = [
        [...ts("1234567890"), Fs("backspace")], ts("qwertyuiop/"), ts("asdfghjkl'?"), [Fs("shift", 2), ...ts("zxcvbnm,.")]
      ],
      DK = [
        [...ts("1234567890"), Fs("backspace")], ts("!@#$%^&*()/"), ts('-_=+[]{};:"'), ts("~`|\\<>'\u20ac\xa3,.")
      ],
      zK = {
        letters: qs,
        accents: [
          [...ts("1234567890"), Fs("backspace")], ts("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), ts("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Fs("shift", 2), ...ts("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: DK
      },
      wK = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      pK = (DD, zD) => "letters" === DD ? zD ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === DD ? "symbols" : "accents"
      },
      sK = function(DD, zD) {
        const wD = ((DD, zD) => [...zK[DD], zD ? Hs : Ys])(DD, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === zD) return wD;
        const pD = Math.min(2, KK(wD[0]) / zD);
        return [Array.from({
          length: zD
        }, ((DD, zD) => ({
          type: "phrase",
          phraseIndex: zD,
          width: pD
        }))), ...wD]
      },
      KK = DD => DD.reduce(((DD, zD) => DD + zD.width), 0),
      rK = DD => Math.max(...DD.map(KK)),
      LK = (DD, zD) => {
        const wD = DD[zD.row];
        let pD = (rK(DD) - KK(wD)) / 2;
        for (let sD = 0; sD < zD.col; sD++) pD += wD[sD].width;
        return pD + wD[zD.col].width / 2
      },
      cK = (DD, zD, wD) => {
        let pD = 0,
          sD = 1 / 0;
        for (let KD = 0; KD < DD[zD].length; KD++) {
          const rD = Math.abs(LK(DD, {
            row: zD,
            col: KD
          }) - wD);
          rD < sD - 1e-9 && (pD = KD, sD = rD)
        }
        return pD
      },
      gK = (DD, zD) => {
        const wD = Math.max(0, Math.min(DD.length - 1, zD.row));
        return {
          row: wD,
          col: Math.max(0, Math.min(DD[wD].length - 1, zD.col))
        }
      },
      RK = (DD, zD, wD) => "once" === DD && zD - wD <= 400 ? "caps" : "off" === DD ? "once" : "off",
      AK = (DD, zD) => "once" === DD && (DD => DD.toLowerCase() !== DD.toUpperCase())(zD) ? "off" : DD,
      UK = (DD, zD, wD) => {
        if ("symbols" === zD || "off" === wD) return DD;
        const pD = DD.toUpperCase();
        return 1 === pD.length ? pD : DD
      };
    var fK = wD(8655);
    const IK = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const BK = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(DD) {
          return !(DD - this.lastSendMs < 2e3) && (this.lastSendMs = DD, !0)
        }
      },
      GK = {
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
      hK = ["Vg", "nameTag"],
      nK = DD => {
        const zD = DD.target instanceof HTMLTextAreaElement && !hK.includes(DD.kind);
        return sK(DD.page, "chat" === DD.kind ? IK.length : 0, zD)
      },
      MK = DD => {
        const zD = DD.getBoundingClientRect(),
          wD = window.innerHeight,
          pD = zD.top + zD.height / 2 < wD / 2 ? "bottom" : "top",
          sD = "bottom" === pD ? wD - zD.bottom - 6 : zD.top - 6;
        return {
          placement: pD,
          maxHeightPx: Math.min(.46 * wD, Math.max(.3 * wD, sD))
        }
      },
      OK = DD => {
        (0, xw.k)(DD) ? (0, xw.d)().close(): (zs.noteChosenStop(DD), DD.blur())
      };
    class JK {
      constructor(DD) {
        this.host = DD, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(DD, zD) {
        this.phraseTexts = DD, this.phrasesFill = zD
      }
      pressKey(DD) {
        const zD = this.host.getState(),
          wD = nK(zD),
          pD = wD[DD.row][DD.col];
        this.host.setState({
          ...zD,
          focus: DD,
          preferredX: LK(wD, DD)
        }), "char" === pD.type ? this.typeChar(pD.char) : "command" === pD.type ? this.runCommand(pD.command) : this.sendPhrase(pD.phraseIndex)
      }
      runCommand(DD) {
        const zD = this.host.getState();
        switch (DD) {
          case "backspace":
            (0, vD.c)(zD.target);
            break;
          case "space":
            (0, vD.e)(zD.target, " ");
            break;
          case "newline":
            (0, vD.e)(zD.target, "\n");
            break;
          case "caretLeft":
            (0, vD.j)(zD.target, -1);
            break;
          case "caretRight":
            (0, vD.j)(zD.target, 1);
            break;
          case "shift": {
            const DD = performance.now();
            this.host.setState({
              ...zD,
              shift: RK(zD.shift, DD, this.lastShiftPressMs)
            }), this.lastShiftPressMs = DD;
            break
          }
          case "page":
          case "otherPage": {
            const wD = pK(zD.page, zD.accentsFirst)[DD];
            this.host.setState({
              ...zD,
              page: wD,
              focus: gK(nK({
                ...zD,
                page: wD
              }), zD.focus)
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
            (0, xw.k)(zD.target) && (0, xw.d)().selectNextChannel()
        }
      }
      submit() {
        var DD, zD;
        const {
          target: wD
        } = this.host.getState();
        this.host.hide(), (0, xw.k)(wD) ? (0, xw.d)().submit() : (zs.noteChosenStop(wD), null === (DD = (zD = (0, xw.h)(wD)).submit) || void 0 === DD || DD.call(zD), document.activeElement === wD && wD.blur())
      }
      close() {
        const {
          target: DD
        } = this.host.getState();
        this.host.hide(), OK(DD)
      }
      typeChar(DD) {
        const {
          target: zD,
          page: wD,
          shift: pD
        } = this.host.getState();
        (0, vD.e)(zD, UK(DD, wD, pD)), this.host.setState({
          ...this.host.getState(),
          shift: AK(pD, DD)
        })
      }
      sendPhrase(DD) {
        if (this.phrasesFill) {
          const {
            target: zD
          } = this.host.getState(), wD = this.phraseTexts[DD];
          wD && (zD.setSelectionRange(0, zD.value.length), (0, vD.e)(zD, wD))
        } else BK.claim(performance.now()) && (this.host.hide(), (0, xw.d)().sendLine(this.phraseTexts[DD]))
      }
    }
    var EK = wD(8679);
    const QK = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      XK = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class VK {
      constructor(DD, zD) {
        this.host = DD, this.editor = zD, this.lastDirection = null, this.navRepeat = new ID.e((0, BD.b)(QK)), this.commandRepeats = new Map(vs.filter((DD => {
          let {
            repeats: zD
          } = DD;
          return zD
        })).map((DD => {
          let {
            command: zD
          } = DD;
          return [zD, (0, BD.b)(XK)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const DD of this.commandRepeats.values()) DD.reset()
      }
      onVisibleFrame(DD) {
        const zD = performance.now();
        for (const {
            command: sD,
            action: KD
          }
          of vs) {
          const wD = (0, RD.g)(KD),
            pD = this.commandRepeats.get(sD);
          if ((pD ? pD.update(DD.isHeld(wD), zD) : DD.wasPressed(wD)) && (this.editor.runCommand(sD), !this.host.getState().visible)) return
        }
        if (DD.wasPressed((0, RD.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const wD = this.readNavDirection(DD);
        this.lastDirection = wD;
        const pD = this.navRepeat.update(wD, zD);
        pD && this.navigate(pD)
      }
      onHiddenFrame(DD, zD) {
        var wD;
        if (DD.wasPressed((0, RD.g)("keyboardClose"))) return void OK(zD);
        const pD = (0, RD.g)("keyboardType");
        if (DD.wasPressed(pD)) return AD.e.consumeButton(pD), void this.host.open(zD);
        const sD = this.readNavDirection(DD),
          KD = null !== sD && sD !== this.lastDirection;
        if (this.lastDirection = sD, !KD || (0, xw.k)(zD)) return;
        const rD = (null === (wD = Ap()) || void 0 === wD ? void 0 : wD.root.contains(zD)) || null !== zD.closest(".EntireInventoryWrapper");
        OK(zD), rD && AD.e.handOffHeldInput()
      }
      navigate(DD) {
        const zD = this.host.getState();
        if ("Up" === DD && 0 === zD.focus.row && "chat" === zD.kind) return (0, xw.d)().stepHistory(), void this.host.setState({
          ...zD
        });
        const wD = ((DD, zD, wD, pD) => {
          if ("Left" === wD || "Right" === wD) {
            const pD = DD[zD.row].length,
              sD = (zD.col + ("Right" === wD ? 1 : -1) + pD) % pD,
              KD = {
                row: zD.row,
                col: sD
              };
            return {
              pos: KD,
              preferredX: LK(DD, KD)
            }
          }
          const sD = (zD.row + ("Down" === wD ? 1 : -1) + DD.length) % DD.length;
          return {
            pos: {
              row: sD,
              col: cK(DD, sD, pD)
            },
            preferredX: pD
          }
        })(nK(zD), zD.focus, DD, zD.preferredX);
        this.host.setState({
          ...zD,
          focus: wD.pos,
          preferredX: wD.preferredX
        })
      }
      readNavDirection(DD) {
        for (const zD of ID.w)
          if (DD.isHeld(zD)) return zD;
        return (0, ID.ab)((0, ID.i)(DD.leftStick, (0, UD.g)().moveDeadzone))
      }
    }
    const PK = ["Up", "Down", "Left", "Right"],
      CK = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const xK = new class {
      constructor() {
        this.state = GK, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new JK(this), this.padInput = new VK(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(DD) {
        const zD = DD.visible !== this.state.visible;
        this.state = DD;
        for (const wD of this.listeners) wD();
        zD && gD.l.KG(EK.e, DD.visible)
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      install() {
        const DD = AD.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, vD.i)(document.activeElement),
            onFrame: DD => {
              this.onFrame(DD)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: DD => PK.includes(DD) || !this.state.visible && DD === (0, RD.g)("keyboardType")
          }),
          zD = DD => {
            const zD = DD.target;
            (0, vD.i)(zD) && (zD === this.pendingChatInput || (0, fD.o)() ? this.open(zD) : this.state.visible && zD !== this.state.target && (this.ownedField = null, this.hide()))
          },
          wD = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          pD = DD => {
            DD.isTrusted && this.state.visible && (DD => !DD.repeat && !CK.has(DD.key) && !(0, fK.c)(DD.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(DD.key))(DD) && this.hide()
          },
          sD = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...MK(this.state.target)
            })
          };
        document.addEventListener("focusin", zD, !0), document.addEventListener("focusout", wD, !0), window.addEventListener("keydown", pD, !0), window.addEventListener("resize", sD);
        const KD = gD.l.subscribe(is.d, (() => {
            this.openChat()
          })),
          rD = gD.l.subscribe(EK.i, (DD => {
            this.openForField(DD)
          }));
        return () => {
          DD(), document.removeEventListener("focusin", zD, !0), document.removeEventListener("focusout", wD, !0), window.removeEventListener("keydown", pD, !0), window.removeEventListener("resize", sD), gD.l.unsubscribe(KD), gD.l.unsubscribe(rD), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const DD = (0, xw.d)();
        DD ? document.activeElement !== DD.input ? (this.clearPendingChat(), this.pendingChatInput = DD.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), DD.open()) : this.open(DD.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(DD) {
        (0, vD.i)(DD) ? (document.activeElement !== DD && DD.focus(), document.activeElement === DD && this.open(DD)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", DD)
      }
      open(DD) {
        var zD;
        if (this.clearPendingChat(), this.ownedField = DD, this.state.visible && this.state.target === DD) return;
        this.restoreInputMode(), (0, vD.m)(DD), this.savedInputMode = DD.getAttribute("inputmode"), DD.setAttribute("inputmode", "none");
        const wD = {
          ...GK,
          visible: !0,
          target: DD,
          kind: (0, xw.k)(DD) ? "chat" : null !== (zD = (0, xw.h)(DD).kind) && void 0 !== zD ? zD : null,
          accentsFirst: (pD = Ms.e.get().getCurrentLanguageCode(), wK.has(pD)),
          ...MK(DD)
        };
        var pD;
        const sD = nK(wD),
          KD = ((DD, zD) => {
            for (let wD = 0; wD < DD.length; wD++) {
              const pD = DD[wD].findIndex((DD => "char" === DD.type && DD.char === zD));
              if (-1 !== pD) return {
                row: wD,
                col: pD
              }
            }
            return null
          })(sD, "q");
        this.padInput.reset(), this.setState({
          ...wD,
          focus: KD,
          preferredX: LK(sD, KD)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(GK))
      }
      onFrame(DD) {
        if (this.releaseLostField()) return;
        const zD = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(DD) : (0, vD.i)(zD) && this.padInput.onHiddenFrame(DD, zD)
      }
      releaseLostField() {
        const DD = this.ownedField;
        return !(null === DD || DD.isConnected && document.activeElement === DD) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: DD
        } = this.state;
        DD && (null === this.savedInputMode ? DD.removeAttribute("inputmode") : DD.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var TK = wD(8796);
    const bK = new Map(vs.map((DD => {
        let {
          command: zD,
          action: wD
        } = DD;
        return [zD, wD]
      }))),
      jK = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      dK = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Vg: "controller:keyboardTargetBookTitle"
      },
      SK = DD => {
        const zD = (() => {
          const [, DD] = (0, lD.useReducer)((DD => DD + 1), 0);
          return DD
        })();
        (0, lD.useEffect)((() => {
          if (!DD) return;
          const wD = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const sD of wD) DD.addEventListener(sD, zD);
          document.addEventListener("selectionchange", zD);
          const pD = new MutationObserver(zD);
          return pD.observe(DD, {
            attributeFilter: ["placeholder"]
          }), () => {
            pD.disconnect();
            for (const pD of wD) DD.removeEventListener(pD, zD);
            document.removeEventListener("selectionchange", zD)
          }
        }), [DD, zD])
      },
      iK = DD => {
        DD.preventDefault()
      },
      lK = DD => {
        "mouse" !== DD.pointerType && DD.preventDefault()
      },
      WK = () => {
        var DD;
        const {
          t: zD
        } = (0, sD.E)(), wD = (() => {
          const [DD, zD] = (0, lD.useState)(xK.getState());
          return (0, lD.useEffect)((() => xK.subscribe((() => {
            zD(xK.getState())
          }))), []), DD
        })(), pD = (0, fD.D)(), KD = (0, lD.useRef)(null);
        (0, UD.n)(), (0, fD.G)(), (0, lD.useEffect)((() => {
          const DD = xK.install(),
            zD = null;
          return () => {
            DD(), null === zD || void 0 === zD || zD()
          }
        }), []);
        const rD = (0, lD.useMemo)((() => IK.map((DD => zD(DD)))), [zD]),
          LD = wD.visible && "chat" === wD.kind ? wD.target : null;
        SK(LD);
        const cD = null !== (DD = null === LD || void 0 === LD ? void 0 : LD.value) && void 0 !== DD ? DD : "",
          gD = ((DD, zD, wD) => {
            if (!DD.startsWith("/")) return [];
            const pD = [];
            for (let sD = zD.length - 1; sD >= 0 && pD.length < wD; sD--) {
              const wD = zD[sD].trim();
              wD.startsWith(DD) && wD !== DD && !pD.includes(wD) && pD.push(wD)
            }
            return pD
          })(cD, cD.startsWith("/") ? (0, TK.g)() : [], IK.length),
          AD = cD.startsWith("/"),
          ID = AD ? IK.map(((DD, zD) => {
            var wD;
            return null !== (wD = gD[zD]) && void 0 !== wD ? wD : ""
          })) : rD;
        if ((0, lD.useEffect)((() => {
            xK.editor.setPhraseRow(ID, AD)
          })), (0, lD.useEffect)((() => {
            const DD = KD.current;
            if (DD) return DD.addEventListener("touchstart", iK, {
              passive: !1
            }), () => {
              DD.removeEventListener("touchstart", iK)
            }
          }), [wD.visible]), !wD.visible) return null;
        const BD = nK(wD),
          GD = rK(BD),
          hD = DD => "char" === DD.type ? UK(DD.char, wD.page, wD.shift) : "phrase" === DD.type ? ID[DD.phraseIndex] : (DD => {
            switch (DD) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === wD.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return jK[pK(wD.page, wD.accentsFirst)[DD]];
              case "space":
                return zD("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return zD("chat" === wD.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(DD.command),
          nD = DD => {
            xK.editor.pressKey(DD)
          };
        return (0, ZD.jsxs)("div", {
          ref: KD,
          className: ND()(xw.s, "top" === wD.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: wD.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": BD.length,
            "--pad-keyboard-height": `${wD.maxHeightPx}px`
          },
          onPointerDown: lK,
          onMouseDown: iK,
          children: [(0, ZD.jsx)(NK, {
            target: wD.target,
            label: wD.kind ? zD(dK[wD.kind]) : wD.target.placeholder || zD("controller:keyboardTargetText")
          }), (0, ZD.jsx)("div", {
            className: "PadKeyboardRows",
            children: BD.map(((DD, zD) => (0, ZD.jsx)("div", {
              className: ND()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === DD[0].type
              }),
              children: DD.map(((DD, sD) => {
                const KD = pD && wD.focus.row === zD && wD.focus.col === sD,
                  rD = "command" === DD.type ? bK.get(DD.command) : void 0;
                return (0, ZD.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: DD.width / GD * 100 + "%"
                  },
                  children: (0, ZD.jsxs)("div", {
                    className: ND()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: KD,
                      PadKeyboardKeyCommand: "command" === DD.type,
                      PadKeyboardKeyPhrase: "phrase" === DD.type,
                      PadKeyboardKeyActive: "command" === DD.type && "shift" === DD.command && "off" !== wD.shift,
                      PadKeyboardKeySubmit: "command" === DD.type && "submit" === DD.command
                    }),
                    role: "button",
                    onClick: () => {
                      nD({
                        row: zD,
                        col: sD
                      })
                    },
                    onTouchEnd: DD => {
                      var wD, pD;
                      DD.preventDefault(), wD = DD.changedTouches[0], pD = DD.currentTarget.getBoundingClientRect(), wD && wD.clientX >= pD.left && wD.clientX <= pD.right && wD.clientY >= pD.top && wD.clientY <= pD.bottom && nD({
                        row: zD,
                        col: sD
                      })
                    },
                    children: [(0, ZD.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: hD(DD)
                    }), pD && rD && (0, ZD.jsx)(Vs, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, RD.g)(rD)
                    })]
                  })
                }, sD)
              }))
            }, zD)))
          })]
        })
      },
      NK = DD => {
        let {
          target: zD,
          label: wD
        } = DD;
        SK(zD);
        const pD = (0, lD.useRef)(null),
          sD = (0, lD.useRef)(null),
          KD = zD instanceof HTMLTextAreaElement;
        (0, lD.useLayoutEffect)((() => {
          const DD = pD.current,
            zD = sD.current;
          KD ? DD.scrollTop = zD.offsetTop - DD.clientHeight / 2 : DD.scrollLeft = zD.offsetLeft - DD.clientWidth / 2
        }));
        const {
          value: rD,
          start: LD,
          end: cD
        } = (0, vD.q)(zD), gD = "password" === zD.type ? "\u2022".repeat(rD.length) : rD;
        return (0, ZD.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, ZD.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: wD
          }), (0, ZD.jsxs)("div", {
            ref: pD,
            className: ND()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: KD
            }),
            children: [(0, ZD.jsx)("span", {
              children: gD.slice(0, LD)
            }), (0, ZD.jsx)("span", {
              ref: sD,
              className: "PadKeyboardCaret"
            }), LD !== cD && (0, ZD.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: gD.slice(LD, cD)
            }), (0, ZD.jsx)("span", {
              children: gD.slice(cD)
            }), 0 === gD.length && zD.placeholder && zD.placeholder !== wD && (0, ZD.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: zD.placeholder
            })]
          })]
        })
      };
    var ZK = wD(1383),
      yK = wD(3430);
    const kK = function() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return zD.map(RD.g)
      },
      mK = (DD, zD) => {
        const wD = aw(DD);
        return wD ? [{
          glyphs: [wD],
          labelKey: zD
        }] : []
      },
      eK = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      oK = "--pad-hint-bar-clearance",
      aK = "[data-pad-hint-bar-avoid]",
      uK = DD => {
        const zD = [];
        for (const wD of DD)(0, HD.r)(wD) && zD.push(wD.getBoundingClientRect());
        return zD
      },
      vK = DD => {
        if (!DD) return null;
        const zD = Ap(),
          wD = zD ? uK(((DD, zD) => {
            const wD = DD.closest(aK);
            return wD ? [wD] : ("popup" === zD ? document : DD).querySelectorAll(aK)
          })(zD.root, zD.layer.kind)) : [],
          pD = !zD || zD.root.hasAttribute("data-pad-shows-hud");
        if (((0, yK.l)(null === zD || void 0 === zD ? void 0 : zD.layer.kind, (0, yK.n)()) || pD) && wD.push(...uK(document.querySelectorAll(eK.join(",")))), 0 === wD.length) return null;
        const {
          width: sD,
          height: KD
        } = DD.getBoundingClientRect(), rD = window.innerHeight - 8, LD = (0, yK.r)(rD, {
          width: sD,
          height: KD
        }, window.innerWidth / 2, wD, 8);
        return LD === rD ? null : Math.round(window.innerHeight - LD)
      },
      tK = DD => {
        const zD = document.documentElement.style,
          wD = DD ? `${Math.round(window.innerHeight-DD.getBoundingClientRect().top)}px` : "";
        zD.getPropertyValue(oK) !== wD && (wD ? zD.setProperty(oK, wD) : zD.removeProperty(oK))
      },
      FK = () => {
        const {
          t: DD
        } = (0, sD.E)(), {
          hideButtonHints: zD
        } = (0, UD.n)(), wD = (0, fD.D)(), [pD, KD] = (0, lD.useState)(!1), [rD, gD] = (0, lD.useState)([]), [BD, GD] = (0, lD.useState)(null), hD = (0, lD.useRef)(null), nD = (0, lD.useRef)(null);
        (0, ns.g)(EK.e, (DD => {
          KD(DD)
        })), (0, ns.g)(yK.o, (() => {
          var DD;
          null === (DD = nD.current) || void 0 === DD || DD.call(nD)
        }));
        const MD = wD && !zD && !pD;
        return (0, lD.useEffect)((() => {
          if (!MD) return;
          let DD = null;
          const zD = () => {
            const zD = (() => {
                var DD;
                const zD = AD.e.getActiveConsumerName(),
                  wD = (0, yK.h)();
                if (wD) {
                  const DD = (0, RD.g)(wD),
                    zD = "emoteWheel" === wD && "wheel" === (0, UD.g)().emoteButton || !(0, ID.D)(AD.e.getLastFrame().values, DD) ? {
                      glyphs: kK("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [DD],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, RD.w)(DD)],
                    labelKey: "controller:wheelChoose"
                  }, zD, {
                    glyphs: kK("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const pD = Ap();
                if (!pD || "focus" !== zD && "cursor" !== zD) return (0, yK.e)(RD.g);
                const sD = [],
                  KD = {
                    glyphs: kK("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  rD = (0, oD.v)(pD.root),
                  LD = rD ? !(0, HD.u)(rD) : Boolean(pD.layer.close),
                  gD = !rD && pD.layer.closeLabelKey ? pD.layer.closeLabelKey : KD.labelKey,
                  fD = LD ? [{
                    ...KD,
                    labelKey: gD
                  }] : [],
                  BD = jw(pD.layer.kind) ? [{
                    glyphs: kK("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === zD) return sD.push({
                  glyphs: kK("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), sD.push({
                  glyphs: kK("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), sD.push(...fD), sD.push(...BD), sD.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Pp() && sD.push({
                  glyphs: kK("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), sD;
                const GD = zs.getFocused();
                GD && (0, jp.b)(GD) ? sD.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : GD && (0, oD.D)(GD) ? sD.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : sD.push({
                  glyphs: kK("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const hD = GD ? null === (DD = fw(GD)) || void 0 === DD ? void 0 : DD.dataset.padSecondary : void 0;
                hD && sD.push({
                  glyphs: kK("menuSecondary"),
                  labelKey: hD
                }), sD.push(...null !== GD && void 0 !== GD && GD.closest("[data-pad-friends-column]") ? [KD] : fD), sD.push(...BD);
                const nD = "home" === pD.layer.kind;
                tw(pD.root) || !Ww(pD.root) && !Fw(pD) ? nD && sD.push({
                  glyphs: kK("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : sD.push({
                  glyphs: kK("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), nD && (sD.push(...mK("inventory", "controller:menusFriends")), hD || sD.push({
                  glyphs: kK("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), sD.push(...mK("pause", "controller:menusSettings")), sD.push(...mK("leaderboard", "controller:menusNotifications")));
                const MD = cD.e.get("openEverythingMenuName");
                return "inGame" === cD.e.get("gameState") && "popup" !== pD.layer.kind && null !== MD && ((0, gw.o)(MD) ? sD.push(...mK("leaderboard", "controller:menusClose")) : MD !== Lw.l.LOBBY_LEADERBOARD && sD.push(...mK("leaderboard", "controller:menusLobby"))), sD.push({
                  glyphs: kK("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), sD
              })(),
              wD = vK(hD.current),
              pD = ((DD, zD) => `${DD.map((DD=>`${DD.glyphs.join("+")}:${DD.labelKey}`)).join("|")}@${zD}`)(zD, wD);
            pD !== DD && (DD = pD, (0, LD.unstable_batchedUpdates)((() => {
              gD(zD), GD(wD)
            }))), tK(hD.current)
          };
          zD(), nD.current = zD;
          const wD = requestAnimationFrame(zD),
            pD = setInterval(zD, 150);
          return () => {
            nD.current = null, cancelAnimationFrame(wD), clearInterval(pD), tK(null)
          }
        }), [MD]), (0, lD.useLayoutEffect)((() => {
          if (!MD) return;
          if (0 === rD.length) return void tK(null);
          const DD = vK(hD.current);
          DD === BD ? tK(hD.current) : GD(DD)
        }), [MD, rD, BD]), MD && 0 !== rD.length ? (0, ZD.jsx)("div", {
          ref: hD,
          className: "PadButtonHintBar SmallTextBold",
          style: null === BD ? void 0 : {
            bottom: BD
          },
          "aria-hidden": !0,
          children: rD.map((zD => (0, ZD.jsxs)("div", {
            className: "PadButtonHint",
            children: [zD.glyphs.map((DD => (0, ZD.jsx)(Vs, {
              glyph: DD,
              className: "PadButtonHintGlyph"
            }, DD))), (0, ZD.jsx)("span", {
              children: DD(zD.labelKey)
            })]
          }, zD.labelKey)))
        }) : null
      };
    var YK = wD(1745);
    const HK = [HD.c, "label", "[data-pad-slider]"].join(","),
      qK = "data-pad-cursor-probe",
      Dr = DD => {
        var zD;
        const wD = (DD => {
          const zD = [];
          for (let pD = DD; pD && pD !== document.body && pD !== document.documentElement && (zD.push(pD), !(zD.length > 8)); pD = pD.parentElement);
          const wD = document.documentElement.classList.contains(fD.y) ? zD[zD.length - 1] : void 0;
          null === wD || void 0 === wD || wD.setAttribute(qK, "");
          try {
            return zD.map((DD => ({
              element: DD,
              cursor: getComputedStyle(DD).cursor
            })))
          } finally {
            null === wD || void 0 === wD || wD.removeAttribute(qK)
          }
        })(DD);
        if ("pointer" !== (null === (zD = wD[0]) || void 0 === zD ? void 0 : zD.cursor)) return null;
        let pD = 0;
        for (; pD + 1 < wD.length && "pointer" === wD[pD + 1].cursor;) pD++;
        return wD[pD].element
      },
      zr = (DD, zD, wD, pD) => {
        const sD = pD.root.contains(DD) ? pD.root : null;
        for (let KD = DD; KD && KD !== document.body && KD !== document.documentElement; KD = KD.parentElement) {
          if (KD instanceof HTMLElement && PD(KD, zD) && jD(KD, zD, wD)) return KD;
          if (KD === sD) break
        }
        return "home" === pD.layer.kind || "gamePage" === pD.layer.kind ? ((DD, zD) => {
          const wD = document.scrollingElement;
          return wD instanceof HTMLElement && ![document.documentElement, document.body].some((zD => {
            const wD = getComputedStyle(zD),
              pD = "y" === DD ? wD.overflowY : wD.overflowX;
            return "hidden" === pD || "clip" === pD
          })) && jD(wD, DD, zD) ? wD : null
        })(zD, wD) : null
      };
    const wr = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, BD.b)(ID.q), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const DD = AD.e.register({
              name: "cursor",
              isActive: () => "cursor" === Cp(),
              onFrame: DD => {
                this.onFrame(DD)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: DD => (0, AD.h)(DD) || DD === (0, RD.g)("menuConfirm") && (0, oD.G)((0, fD.e)())
            }),
            zD = (0, pp.m)((DD => {
              const zD = DD.getRoot();
              zD && this.layerPoints.delete(zD), zD === this.layerRoot && (this.layerRoot = null)
            })),
            wD = gD.l.subscribe("appManagerUpdated|activeInputDevice", (DD => {
              "gamepad" !== DD && this.active && !this.hidden && this.hide()
            }));
          return () => {
            DD(), zD(), gD.l.unsubscribe(wD), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, fD.o)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.KG()
        }
        activate(DD) {
          this.active = !0, this.hidden = !1;
          const zD = Qp();
          !zD || zD.root && zD.root !== DD.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(DD), this.jumpTo(zD.point))
        }
        jumpTo(DD) {
          this.state = {
            x: DD.x,
            y: DD.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.KG())
        }
        onFrame(DD) {
          const zD = Ap();
          if (!zD) return;
          if (this.active || this.activate(zD), this.followPage(zD)) return;
          this.followLayer(zD);
          const wD = DD.wokeDevice ? (0, fD.e)() : null;
          if (wD && this.jumpTo(wD), !(0, fD.o)()) return void this.hide();
          const pD = (0, RD.g)("menuToggleCursor");
          if (DD.wasPressed(pD)) return AD.e.consumeButton(pD), void Ep(this.getHandoff(null));
          if (this.handBackToFocus(DD)) return;
          const sD = (0, RD.g)("menuConfirm"),
            KD = (0, RD.g)("menuSecondary");
          if (DD.wasPressed((0, RD.g)("menuBack"))) return (0, oD.j)(zD.root) || (0, oD.d)(zD.root) || Up(), void this.KG();
          if (qw(null, DD, zD)) return DD.wasReleased(sD) && this.press && (this.updateHit(!1), this.updateConfirm(DD, sD)), void this.KG();
          if (document.pointerLockElement) return void this.hide();
          const rD = xp() ? {
              x: 0,
              y: 0
            } : (DD => {
              const zD = (DD, zD) => (DD ? 1 : 0) - (zD ? 1 : 0);
              return {
                x: zD(DD.isHeld("Right"), DD.isHeld("Left")),
                y: zD(DD.isHeld("Down"), DD.isHeld("Up"))
              }
            })(DD),
            LD = (0, UD.g)().moveDeadzone,
            cD = ((DD, zD) => {
              const wD = (0, ID.i)(DD, OD(zD));
              return Math.hypot(wD.x, wD.y)
            })(DD.leftStick, LD) > 0 || 0 !== rD.x || 0 !== rD.y;
          if (this.hidden) {
            const zD = DD.wasPressed(sD),
              wD = DD.wasPressed(KD);
            if (!cD && !QD(DD.rightStick) && !zD && !wD && !DD.wokeDevice) return void this.KG();
            if (this.hidden = !1, this.updateHit(!1), zD || wD) return zD && (this.press = {
              kind: "ignored"
            }, DD.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.KG()
          }
          this.movePendingPageStart(cD);
          const gD = this.getPoint();
          this.state = ED(this.state, {
            stick: DD.leftStick,
            moveDeadzone: LD,
            dpad: rD,
            dtMs: DD.dtMs,
            cursorSpeedPercent: (0, UD.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const BD = this.state.x !== gD.x || this.state.y !== gD.y,
            GD = [sD, KD].some((zD => DD.wasPressed(zD) || DD.wasReleased(zD)));
          (BD || GD || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(BD), this.updateConfirm(DD, sD), this.updateSecondary(DD, KD), this.updateScroll(DD, zD), this.KG()
        }
        followPage(DD) {
          const zD = "home" === DD.layer.kind || "gamePage" === DD.layer.kind,
            wD = this.page;
          if (this.page = zD ? {
              key: (0, pp.r)(DD.layer),
              root: DD.root
            } : null, !this.page || !wD || wD.root !== DD.root || wD.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(DD), "hybrid" === Jp()) return np = null, Gp = null, Mp.lock(), !0;
          const {
            key: pD
          } = this.page;
          return this.pendingPageStart = {
            root: DD.root,
            key: pD,
            returning: zs.notePageEnteredByCursor(pD),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(DD) {
          const zD = this.pendingPageStart;
          if (!zD) return;
          if (DD || zD.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const wD = zD.returning ? zs.recallStop(zD.root, zD.key) : null;
          if (!wD && zD.returning && performance.now() - zD.enteredAtMs < 1e3) return;
          const pD = null !== wD && void 0 !== wD ? wD : zs.pickInitial(zD.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: zD.enteredAtMs
          });
          pD && (this.pendingPageStart = null, this.jumpTo((0, oD.w)(pD)))
        }
        setLayer(DD) {
          this.layerRoot = DD.root, this.layerOrder = DD.order
        }
        followLayer(DD) {
          var zD;
          if (DD.root === this.layerRoot) return;
          null !== (zD = this.layerRoot) && void 0 !== zD && zD.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const wD = this.layerPoints.get(DD.root),
            pD = wD && DD.order <= this.layerOrder ? wD : zs.getLayerStartPoint(DD.root);
          this.setLayer(DD), this.jumpTo(pD)
        }
        getHandoff(DD) {
          var zD;
          return {
            point: this.getPoint(),
            element: null !== (zD = this.interactive) && void 0 !== zD ? zD : this.findDraggedSliderNearby(),
            direction: DD
          }
        }
        findDraggedSliderNearby() {
          const DD = this.draggedSlider;
          if (null === DD || void 0 === DD || !DD.isConnected) return null;
          const zD = DD.getBoundingClientRect(),
            {
              y: wD
            } = this.getPoint();
          return wD >= zD.top - 40 && wD <= zD.bottom + 40 ? DD : null
        }
        handBackToFocus(DD) {
          if (!xp()) return !1;
          const zD = ID.w.find((zD => DD.wasPressed(zD)));
          return !!zD && (wD = this.getHandoff(zD), np = Ip(wD), Gp = null, Mp.lock(), AD.e.handOffHeldInput(), !0);
          var wD
        }
        getAssistContext() {
          const DD = this.interactive;
          if (null === DD || void 0 === DD || !DD.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const zD = DD.getBoundingClientRect();
          if (zD.width > .4 * window.innerWidth || zD.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const wD = (0, UD.g)().cursorMagnetism && !(0, YK.c)(DD) && !DD.closest("[data-pad-slider]"),
            pD = this.magnet && this.magnet !== DD && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : zD;
          return {
            overInteractive: !0,
            magnetTarget: wD ? {
              x: pD.left + pD.width / 2,
              y: pD.top + pD.height / 2
            } : null
          }
        }
        updateHit(DD) {
          this.lastHitTestMs = performance.now();
          const zD = this.getPoint(),
            wD = document.elementFromPoint(zD.x, zD.y),
            pD = wD && !(0, hD.s)(wD) && (DD => {
              var zD;
              const wD = Ap();
              return !(wD && !wD.root.contains(DD) && !DD.closest(".tooltip-container")) || !(null !== (zD = document.getElementById("root")) && void 0 !== zD && zD.contains(DD))
            })(wD) ? wD : null;
          if (pD !== this.hit) return (0, oD.o)(this.hit, pD, zD), this.hit = pD, void this.setInteractive(pD ? (DD => {
            const zD = DD.closest(HK);
            if (zD) {
              var wD, pD;
              const DD = null !== (wD = null === (pD = zD.parentElement) || void 0 === pD ? void 0 : pD.closest("[data-pad-focusable]")) && void 0 !== wD ? wD : zD;
              return (0, HD.u)(DD) ? {
                element: null,
                magnet: null
              } : {
                element: DD,
                magnet: zD
              }
            }
            const sD = Dr(DD);
            return {
              element: sD,
              magnet: sD
            }
          })(pD) : {
            element: null,
            magnet: null
          });
          DD && pD && (0, oD.o)(pD, pD, zD)
        }
        setInteractive(DD) {
          let {
            element: zD,
            magnet: wD
          } = DD;
          this.interactive = zD, this.magnet = wD
        }
        clearHover() {
          this.hit && (0, oD.o)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const DD = this.hit;
          if (!DD || (0, oD.D)(DD)) return {
            kind: "ignored"
          };
          const zD = (0, jp.b)(DD),
            wD = DD.closest("[data-pad-slider]");
          return zD && wD ? {
            kind: "slider",
            slider: wD,
            adjuster: zD
          } : ((0, oD.s)(DD, this.getPoint()), {
            kind: "pointer",
            target: DD
          })
        }
        applySliderFraction(DD) {
          var zD;
          const wD = DD.slider.getBoundingClientRect(),
            pD = wD.height > wD.width,
            sD = null === (zD = DD.slider.querySelector("[data-pad-slider-handle]")) || void 0 === zD ? void 0 : zD.getBoundingClientRect(),
            KD = sD ? pD ? sD.height : sD.width : 0,
            rD = (pD ? wD.height : wD.width) - KD;
          if (rD <= 0) return;
          const LD = pD ? wD.bottom - KD / 2 - this.state.y : this.state.x - wD.left - KD / 2;
          DD.adjuster.setFraction(Math.max(0, Math.min(1, LD / rD)))
        }
        updateConfirm(DD, zD) {
          DD.wasPressed(zD) && (this.press = DD.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const wD = this.press;
          if (!wD) return;
          if (DD.isHeld(zD)) return "slider" === wD.kind && this.applySliderFraction(wD), void this.updateRepeat();
          this.press = null;
          const pD = this.repeated;
          if (this.endRepeat(), !DD.wasReleased(zD)) return void this.endPressWithoutClick(wD);
          const sD = this.getPoint(),
            KD = this.hit;
          if ("slider" === wD.kind && wD.adjuster.endDrag(), "pointer" === wD.kind) {
            const DD = null !== KD && void 0 !== KD ? KD : wD.target.isConnected ? wD.target : null;
            DD && (0, oD.t)(DD, sD);
            const zD = KD && wD.target.isConnected && !pD ? ((DD, zD) => {
              for (let wD = DD; wD; wD = wD.parentElement)
                if (wD.contains(zD)) return wD;
              return null
            })(wD.target, KD) : null;
            zD && (zs.noteCursorActivation(zD), (0, hD.f)(zD, new MouseEvent("click", (0, oD.N)(sD, 0, 0))), (0, oD.f)(zD), (0, oD.K)(zD) && (0, oD.H)(zD))
          }
        }
        beginRepeat() {
          var DD, zD, wD;
          const pD = null !== (DD = null === (zD = this.hit) || void 0 === zD ? void 0 : zD.closest("[data-pad-repeat]")) && void 0 !== DD ? DD : null;
          this.repeatStop = pD, this.repeatKey = null !== (wD = null === pD || void 0 === pD ? void 0 : pD.getAttribute("data-pad-repeat")) && void 0 !== wD ? wD : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const DD = this.repeatStop;
          if (!DD) return;
          const zD = this.hit;
          DD.isConnected && !(0, HD.u)(DD) && DD.getAttribute("data-pad-repeat") === this.repeatKey && zD && DD.contains(zD) ? DD.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, zs.noteCursorActivation(DD), (0, hD.f)(DD, new MouseEvent("click", (0, oD.N)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(DD) {
          "slider" === DD.kind && DD.adjuster.endDrag(), "pointer" === DD.kind && DD.target.isConnected && (0, oD.t)(DD.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(DD, zD) {
          DD.wasPressed(zD) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !DD.isHeld(zD) && (this.secondaryArmed = !1, DD.wasReleased(zD) && this.hit && (0, oD.m)(this.hit, this.getPoint(), 2))
        }
        updateScroll(DD, zD) {
          const wD = XD(DD.rightStick, DD.dtMs);
          if (0 === wD.x && 0 === wD.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + wD.x,
            y: this.scrollRemainder.y + wD.y
          };
          const pD = Math.trunc(this.scrollRemainder.x),
            sD = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - pD,
            y: this.scrollRemainder.y - sD
          };
          const KD = this.hit;
          if (!KD) return;
          let rD = !1;
          if (0 !== sD) {
            const DD = zr(KD, "y", sD > 0 ? 1 : -1, zD);
            DD && (DD.scrollBy({
              top: sD,
              behavior: "instant"
            }), rD = !0)
          }
          if (0 !== pD) {
            const DD = zr(KD, "x", pD > 0 ? 1 : -1, zD);
            DD && (DD.scrollBy({
              left: pD,
              behavior: "instant"
            }), rD = !0)
          }
          rD && (this.lastHitTestMs = -1 / 0)
        }
        KG() {
          uD.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      pr = () => {
        const DD = (0, lD.useMemo)((() => new mD), []),
          zD = (0, fD.D)();
        return (0, lD.useEffect)((() => {
          if (!zD) return;
          let wD = 0,
            pD = {
              of: null,
              atMs: 0,
              list: []
            };
          const sD = document.getElementsByClassName(Tp),
            KD = DD => {
              for (const zD of [...sD]) zD !== DD && zD.classList.remove(Tp)
            },
            rD = () => {
              var zD;
              wD = requestAnimationFrame(rD);
              const sD = (() => {
                const DD = zs.getFocused();
                if (zs.isActive() && null !== DD && void 0 !== DD && DD.isConnected) return DD;
                const zD = wr.getHighlighted();
                return null !== zD && void 0 !== zD && zD.isConnected ? zD : null
              })();
              KD(sD), sD && !sD.classList.contains(Tp) && sD.classList.add(Tp);
              const LD = null !== (zD = null === sD || void 0 === sD ? void 0 : sD.closest("[data-pad-reticle-box]")) && void 0 !== zD ? zD : sD;
              DD.show(LD ? ((DD, zD) => {
                let wD = DD.left,
                  pD = DD.top,
                  sD = DD.right,
                  KD = DD.bottom;
                for (const rD of zD) {
                  if (!rD) continue;
                  const DD = SD(rD);
                  wD = Math.max(wD, DD.left), pD = Math.max(pD, DD.top), sD = Math.min(sD, DD.right), KD = Math.min(KD, DD.bottom)
                }
                return sD <= wD || KD <= pD ? null : {
                  left: wD,
                  top: pD,
                  width: sD - wD,
                  height: KD - pD
                }
              })(LD.getBoundingClientRect(), (DD => {
                const zD = performance.now();
                return (pD.of !== DD || zD - pD.atMs > 500) && (pD = {
                  of: DD,
                  atMs: zD,
                  list: [CD(DD, "y"), CD(DD, "x")]
                }), pD.list
              })(LD)) : null)
            };
          return wD = requestAnimationFrame(rD), () => {
            cancelAnimationFrame(wD), KD(null), DD.hide()
          }
        }), [zD, DD]), (0, ZD.jsx)(eD, {
          placer: DD,
          className: "PadFocusRing"
        })
      },
      sr = (DD, zD) => {
        DD.style.transform = `translate3d(${zD.x}px, ${zD.y}px, 0)`, DD.classList.toggle("Visible", zD.visible), DD.classList.toggle("Pressed", zD.pressed)
      },
      Kr = () => {
        const DD = (0, lD.useRef)(null);
        return (0, lD.useEffect)((() => {
          const zD = uD.subscribe((zD => {
            DD.current && sr(DD.current, zD)
          }));
          return DD.current && sr(DD.current, uD.get()), zD
        }), []), (0, ZD.jsx)("div", {
          ref: DD,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, ZD.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      rr = "#ncmp__modal.ncmp__active",
      Lr = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(rr) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(rr),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      cr = "PadOverThirdParty",
      gr = new Set(Lr.map((DD => DD.id))),
      Rr = () => {
        const DD = Lr.map((DD => {
            let {
              id: zD,
              find: wD,
              startSelectors: pD
            } = DD;
            return (0, pp.p)({
              id: zD,
              kind: "popup",
              getRoot: () => {
                const DD = wD(),
                  zD = DD ? ((DD, zD) => {
                    var wD;
                    for (const pD of zD) {
                      const zD = DD.querySelector(pD);
                      if (zD) return zD
                    }
                    return null !== (wD = [...DD.querySelectorAll("button")].find((DD => !DD.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== wD ? wD : null
                  })(DD, pD) : null;
                if (DD && zD && !zD.hasAttribute("data-pad-default-focus")) {
                  for (const zD of DD.querySelectorAll("[data-pad-default-focus]")) zD.removeAttribute("data-pad-default-focus");
                  for (const zD of DD.querySelectorAll("[data-pad-hint-bar-avoid]")) zD.removeAttribute("data-pad-hint-bar-avoid");
                  zD.setAttribute("data-pad-default-focus", ""), ((DD, zD) => {
                    let wD = DD;
                    for (let pD = DD.parentElement; pD && zD.contains(pD) && !(pD.getBoundingClientRect().height >= window.innerHeight / 2); pD = pD.parentElement) wD = pD;
                    return wD
                  })(zD, DD).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return DD
              },
              close: null,
              memoryKey: null
            })
          })),
          zD = document.documentElement,
          wD = rD.g.onFrame((() => {
            const DD = (0, fD.o)() ? Ap() : null,
              wD = !!DD && (pD = DD.layer, gr.has(pD.id));
            var pD;
            zD.classList.contains(cr) !== wD && zD.classList.toggle(cr, wD)
          }));
        return () => {
          for (const zD of DD) zD();
          wD(), zD.classList.remove(cr)
        }
      },
      Ar = "PadLargePointer",
      Ur = () => {
        (0, lD.useEffect)((() => {
          const DD = (0, hD.m)(document.body),
            zD = zs.install(),
            wD = wr.install(),
            pD = Rr();
          return () => {
            DD(), zD(), wD(), pD()
          }
        }), []);
        const {
          largePointer: DD
        } = (0, UD.n)(), zD = (0, ZK.o)() && DD;
        return (0, lD.useEffect)((() => {
          if (zD) return document.documentElement.classList.add(Ar), () => {
            document.documentElement.classList.remove(Ar)
          }
        }), [zD]), (0, LD.createPortal)((0, ZD.jsxs)(ZD.Fragment, {
          children: [(0, ZD.jsx)(FK, {}), (0, ZD.jsx)(pr, {}), (0, ZD.jsx)(Kr, {})]
        }), document.body)
      };
    var fr = wD(8803),
      Ir = wD(8824),
      Br = wD(8810);
    wD(8826);
    const Gr = (DD, zD) => {
        const [wD, pD] = (0, lD.useState)(!1), [sD, KD] = (0, lD.useState)(null), rD = (0, lD.useRef)(null), LD = (0, lD.useCallback)((DD => {
          rD.current = DD, KD(DD)
        }), []), cD = (0, lD.useCallback)((() => {
          pD(!1), LD(null)
        }), [LD]), RD = (0, lD.useCallback)((() => {
          pD(!0)
        }), []), AD = (0, lD.useCallback)(((DD, zD) => {
          LD((0, Br.C)(DD, zD, rD.current))
        }), [LD]);
        (0, lD.useLayoutEffect)((() => (zD(wD), (0, yK.v)(DD, wD), gD.l.KG(yK.o), () => {
          zD(!1), (0, yK.v)(DD, !1), gD.l.KG(yK.o)
        })), [wD, DD, zD]), (0, ns.g)("appManagerUpdated|activeInputDevice", (DD => {
          "gamepad" !== DD && cD()
        })), (0, ns.g)("appManagerUpdated|gameState", (DD => {
          "inGame" !== DD && cD()
        }));
        const UD = () => {
          (0, gw.q)() && cD()
        };
        return (0, ns.g)("appManagerUpdated|openEverythingMenuName", UD), (0, ns.g)("appManagerUpdated|openInGameMenuName", UD), {
          open: wD,
          picked: sD,
          pickedRef: rD,
          show: RD,
          aim: AD,
          close: cD
        }
      },
      hr = DD => {
        let {
          className: zD,
          slotCount: wD,
          picked: pD,
          slotLabel: sD,
          renderSlot: KD,
          centre: rD
        } = DD;
        const LD = Array.from({
          length: wD
        }, ((DD, zD) => zD));
        return (0, ZD.jsx)("div", {
          className: ND()("EmoteWheelOverlay PadRadialWheel", zD),
          children: (0, ZD.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Br.s + "rem",
              height: 2 * Br.s + "rem"
            },
            children: [(0, ZD.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Br.n} ${Br.n}`,
              children: [LD.map((DD => (0, ZD.jsx)("path", {
                d: (0, Br.t)(DD, wD, Br.f, Br.j, Br.m),
                className: ND()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: DD === pD
                }),
                "aria-label": sD(DD)
              }, DD))), (0, ZD.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Br.f,
                cy: Br.f,
                r: Br.m
              }), (0, ZD.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Br.f,
                cy: Br.f,
                r: Br.j
              }), null !== pD && (0, ZD.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Br.t)(pD, wD, Br.f, Br.j, Br.m)
              })]
            }), LD.map((DD => {
              const zD = (0, Br.v)(DD, wD);
              return (0, ZD.jsx)("div", {
                className: ND()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: DD === pD
                }),
                style: {
                  left: `calc(50% + ${Br.c*Math.cos(zD)}rem)`,
                  top: `calc(50% + ${Br.c*Math.sin(zD)}rem)`
                },
                "aria-hidden": !0,
                children: KD(DD)
              }, DD)
            })), (0, ZD.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: rD
            })]
          })
        })
      },
      nr = IK.length,
      Mr = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = Gr("chat", bw.l), wD = (0, lD.useMemo)((() => IK.map((zD => DD(zD)))), [DD]);
        return (0, ns.g)(bw.k, (() => {
          zD.open || (0, fr.f)() || (0, Ir.p)() || "inGame" !== cD.e.get("gameState") || (0, gw.q)() || !(0, xw.d)() || zD.show()
        })), (0, ns.g)(bw.g, (DD => {
          zD.open && zD.aim(DD, nr)
        })), (0, ns.g)(bw.i, (() => {
          var DD;
          if (!zD.open) return;
          const pD = zD.pickedRef.current;
          null !== pD ? BK.claim(performance.now()) && (zD.close(), null === (DD = (0, xw.d)()) || void 0 === DD || DD.sendLine(wD[pD])) : zD.close()
        })), (0, ns.g)(bw.h, zD.close), zD.open ? (0, ZD.jsx)(hr, {
          className: "QuickChatWheel",
          slotCount: nr,
          picked: zD.picked,
          slotLabel: DD => wD[DD],
          renderSlot: DD => wD[DD],
          centre: null !== zD.picked ? wD[zD.picked] : DD("controller:quickChatPick")
        }) : null
      },
      Or = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = Gr("actionButton", Ir.q), [wD, pD] = (0, lD.useState)([]);
        if ((0, ns.g)(Ir.k, (DD => {
            zD.open || (0, fr.f)() || (0, bw.e)() || "inGame" !== cD.e.get("gameState") || (0, gw.q)() || (pD(DD), zD.show())
          })), (0, ns.g)(Ir.b, (DD => {
            zD.open && zD.aim(DD, wD.length)
          })), (0, ns.g)(Ir.i, (() => {
            if (!zD.open) return;
            const DD = zD.pickedRef.current;
            zD.close(), null !== DD && gD.l.KG(Ir.o, wD[DD])
          })), (0, ns.g)(Ir.f, zD.close), !zD.open) return null;
        const KD = null !== zD.picked ? wD[zD.picked] : null;
        return (0, ZD.jsx)(hr, {
          className: "ActionWheel",
          slotCount: wD.length,
          picked: zD.picked,
          slotLabel: zD => {
            const pD = wD[zD];
            return "reload" === pD.kind ? DD("controller:gameplayReload") : "customButton" === pD.kind ? pD.description || pD.icon : "touchButton" === pD.kind && "string" === typeof pD.label ? pD.label : ""
          },
          renderSlot: DD => (0, ZD.jsx)(Cs, {
            action: wD[DD]
          }),
          centre: KD ? (0, ZD.jsx)(Cs, {
            action: KD
          }) : DD("controller:actionWheelPick")
        })
      };
    var Jr = wD(103);
    const Er = () => ((0, lD.useEffect)((() => {
        var DD, zD;
        const wD = (0, hD.m)(document.getElementById("root")),
          pD = (0, fD.h)(),
          sD = (() => {
            const DD = [gD.l.subscribe(ps.g, (() => {
                Ls("blockBreak")
              })), gD.l.subscribe("damagedByOtherPlayer", (() => {
                Ls("damage")
              })), gD.l.subscribe("yourAttackHit", (DD => {
                let {
                  hitSelf: zD
                } = DD;
                zD || Ls("hit")
              }))],
              zD = rD.g.onActivePadChanged((DD => {
                DD && Ls("connect")
              }));
            return () => {
              for (const zD of DD) gD.l.unsubscribe(zD);
              zD()
            }
          })(),
          KD = (() => {
            const DD = new fs({
              getVisitId: Us.d,
              peekVisitId: Us.peekVisitSessionId,
              readReportedVisitId: () => {
                const DD = As.k.getItem(Is);
                return "string" === typeof DD ? DD : null
              },
              writeReportedVisitId: DD => {
                As.k.setItem(Is, DD)
              },
              isPadActive: fD.o,
              getPadFamily: () => {
                var DD, zD;
                return null !== (DD = null === (zD = rD.g.getActivePad()) || void 0 === zD ? void 0 : zD.family) && void 0 !== DD ? DD : null
              },
              canReport: gs.h,
              getInputType: Rs.e,
              sI: gs.m
            });
            let zD = 0,
              wD = null;
            const pD = sD => {
                null === wD && ("notReady" !== DD.check(sD) || null !== wD || zD >= 20 || (zD++, wD = setTimeout((() => {
                  wD = null, pD(!1)
                }), 3e3)))
              },
              sD = gD.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
                pD(!0)
              })),
              KD = (0, Us.f)((() => {
                zD = 0, pD(!0)
              }));
            return () => {
              gD.l.unsubscribe(sD), KD(), null !== wD && clearTimeout(wD)
            }
          })(),
          LD = rD.g.onFrame(((DD, zD) => {
            const wD = (0, fD.u)(DD);
            AD.e.dispatch(DD, zD, wD)
          }));
        let RD = null !== (DD = null === (zD = rD.g.getActivePad()) || void 0 === zD ? void 0 : zD.family) && void 0 !== DD ? DD : null;
        const ID = rD.g.onActivePadChanged((DD => {
            var zD, wD;
            (AD.e.reset(), (0, fD.z)(), gD.l.KG(rD.d, DD), (null !== (zD = null === DD || void 0 === DD ? void 0 : DD.family) && void 0 !== zD ? zD : null) !== RD) && (RD = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.family) && void 0 !== wD ? wD : null, gD.l.KG(UD.c, (0, UD.g)()));
            !DD && (0, fD.o)() && (0, fD.A)(cD.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          BD = () => {
            "visible" !== document.visibilityState && AD.e.clear()
          },
          GD = () => {
            AD.e.clear()
          };
        document.addEventListener("visibilitychange", BD), window.addEventListener("blur", GD), rD.g.start(), (0, cs.n)();
        const nD = null;
        return () => {
          wD(), pD(), sD(), KD(), LD(), ID(), document.removeEventListener("visibilitychange", BD), window.removeEventListener("blur", GD), rD.g.stop(), null === nD || void 0 === nD || nD()
        }
      }), []), (0, ZD.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, ZD.jsx)(ls, {}), (0, ZD.jsx)(as, {}), (0, ZD.jsx)(us, {}), (0, ZD.jsx)(WK, {}), (0, ZD.jsx)(Ur, {}), (0, ZD.jsx)(Mr, {}), (0, ZD.jsx)(Or, {})]
      })),
      Qr = () => Jr.featureFlags.useControllerSupport ? (0, ZD.jsx)(Er, {}) : null;
    var Xr = wD(8213),
      Vr = wD(8830);
    const Pr = new Set(cs.j),
      Cr = DD => `${Vr.n}${(0,UD.j)()}/${DD}`,
      xr = DD => {
        if (!(0, Vr.l)(DD)) return null;
        const [zD, wD] = DD.slice(Vr.n.length).split("/");
        return (0, Xr.g)(zD) && Pr.has(wD) ? (0, cs.f)(zD, wD) : null
      };
    var Tr = wD(8833);
    const br = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, fD.D)(), {
          gameState: wD,
          isUiHidden: pD
        } = (0, cD.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: KD,
          sneakMode: rD
        } = (0, UD.n)(), [LD, gD] = (0, lD.useState)(Tr.b);
        return (0, ns.g)(is.q, gD), zD && !pD && "inGame" === wD && LD ? (0, ZD.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!KD && (0, ZD.jsx)(Vs, {
            glyph: (0, RD.g)("toggle" === rD ? "sneak" : "sneakToggle")
          }), (0, ZD.jsx)("span", {
            children: DD("controller:gameplaySneaking")
          })]
        }) : null
      },
      jr = 12,
      dr = DD => {
        let {
          trigger: zD,
          className: wD,
          children: pD
        } = DD;
        const sD = (0, lD.useRef)(null);
        return (0, lD.useEffect)((() => {
          let DD = 0;
          const wD = CD(zD, "y"),
            pD = () => {
              DD = requestAnimationFrame(pD);
              const KD = sD.current;
              if (!KD || null === zD || void 0 === zD || !zD.isConnected) return;
              const {
                left: rD,
                top: LD
              } = function(DD, zD, wD) {
                let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const KD = DD.left + DD.width / 2,
                  rD = Math.max(jr, wD.width - jr - zD.width),
                  LD = Math.min(Math.max(KD - zD.width / 2, jr), rD),
                  cD = wD.height - pD;
                let gD = 0,
                  RD = cD;
                if (sD) {
                  const DD = Math.max(0, sD.top),
                    pD = Math.min(cD, sD.bottom);
                  pD - DD >= Math.max(wD.height / 2, zD.height + 24) && (gD = DD, RD = pD)
                }
                const AD = DD.top + DD.height / 2 < (gD + RD) / 2 ? RD - jr - zD.height : gD + jr;
                return {
                  left: LD,
                  top: Math.max(jr, AD)
                }
              }(zD.getBoundingClientRect(), {
                width: KD.offsetWidth,
                height: KD.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(oK)) || 0, null !== wD && void 0 !== wD && wD.isConnected ? wD.getBoundingClientRect() : null);
              KD.style.transform = `translate3d(${Math.round(rD)}px, ${Math.round(LD)}px, 0)`, KD.style.visibility = "visible"
            };
          return pD(), () => {
            cancelAnimationFrame(DD)
          }
        }), [zD]), (0, ZD.jsx)("div", {
          ref: sD,
          className: wD,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: pD
        })
      };
    var Sr = wD(1057),
      ir = wD(8837),
      lr = wD(1447),
      Wr = wD(8841),
      Nr = wD(8849);
    const Zr = {
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
      yr = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, fD.D)(), wD = (0, ir.c)(), pD = (0, ms.h)("_tasks"), KD = (0, ms.h)("_availableLeaderboards");
        if (!zD) return null;
        const rD = (DD => {
          let {
            hasShop: zD,
            hasTasksOrLeaderboards: wD,
            canInvite: pD
          } = DD;
          const sD = [];
          return zD && sD.push("shop"), wD && sD.push("tasks"), pD && sD.push("invite"), sD.push("leave"), sD
        })({
          hasShop: wD,
          hasTasksOrLeaderboards: !(!pD && !KD),
          canInvite: !!Jr.featureFlags.canUseInviteLinks
        });
        return (0, ZD.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: rD.map((zD => {
            const {
              icon: wD,
              labelKey: pD
            } = Zr[zD], sD = "leave" === zD ? lr.R : lr.f;
            return (0, ZD.jsx)(sD, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (DD => {
                  switch (DD) {
                    case "shop":
                      return gD.l.KG(Nr.j), void cD.e.set({
                        openEverythingMenuName: Lw.l.SHOP
                      });
                    case "tasks":
                      return void gD.l.KG("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void gD.l.KG("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Wr.b)()
                  }
                })(zD)
              },
              children: (0, ZD.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, ZD.jsx)(Sr.e, {
                  name: wD
                }), (0, ZD.jsx)("span", {
                  children: DD(pD)
                })]
              })
            }, zD)
          }))
        })
      };
    var kr = wD(1981);
    const mr = ID.s,
      er = ["forward", "backward", "left", "right", "sprint"],
      or = DD => DD.ctrlKey || DD.altKey || "Alt" === DD.key || "ArrowUp" === DD.key || "ArrowDown" === DD.key || "Tab" === DD.code || "/" === DD.key || "Slash" === DD.code;
    class ar {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(ID.R).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(DD) {
        this.armed = DD
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || zD ? !DD.repeat && this.swallowedKeys.delete(DD.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(DD.code),
          continues: !1
        } : "Escape" === DD.key || DD.repeat && !this.swallowedKeys.has(DD.code) ? {
          swallow: !1,
          continues: !1
        } : wD ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(DD.code), {
          swallow: !0,
          continues: (0, fD.l)(DD)
        })
      }
      onKeyUp(DD) {
        return this.swallowedKeys.delete(DD.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const sD = (0, ID.p)(DD.values, this.previousHeld),
          KD = null === wD ? -1 : (0, ID.m)(wD),
          rD = KD >= 0 && sD[KD] && !this.previousHeld[KD],
          LD = sD.some(((DD, zD) => DD && !this.previousHeld[zD] && zD !== KD)),
          cD = Math.hypot(DD.leftStick.x, DD.leftStick.y) >= mr,
          gD = Math.hypot(DD.rightStick.x, DD.rightStick.y) >= mr,
          RD = cD && !this.leftStickWasPressed || gD && !this.rightStickWasPressed;
        this.previousHeld = sD, this.leftStickWasPressed = cD, this.rightStickWasPressed = gD;
        let AD = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, AD = !0);
        const UD = !zD && rD && !pD,
          fD = !UD && this.armed && !zD && (LD || RD);
        return (UD || fD) && (this.consumeNextFrame = !0, this.consumeAfterContinue = fD, AD = !0), {
          continues: fD,
          back: UD,
          consumeHeld: AD
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const ur = new Set([...kr.j, ...kr.z]),
      vr = DD => ((DD, zD, wD) => {
        const pD = Object.keys(zD).filter((pD => !wD.has(pD) && zD[pD].includes(DD)));
        return pD.length > 0 && pD.every((DD => er.includes(DD)))
      })(DD, kr.u, ur),
      tr = (DD, zD, wD) => {
        const pD = new ar,
          sD = DD => {
            if (!DD.isTrusted) return;
            const {
              swallow: wD,
              continues: sD
            } = pD.onKeyDown(DD, !(0, fD.J)(DD) || (0, ws.h)() || (0, gw.q)(), vr(DD.code));
            wD && (DD.stopImmediatePropagation(), or(DD) && DD.preventDefault()), sD && ((0, fD.A)("keyboardMouse"), zD())
          },
          KD = DD => {
            DD.isTrusted && pD.onKeyUp(DD) && (DD.stopImmediatePropagation(), or(DD) && DD.preventDefault())
          },
          LD = () => {
            pD.forgetKeys()
          };
        window.addEventListener("keydown", sD, !0), window.addEventListener("keyup", KD, !0), window.addEventListener("blur", LD);
        const cD = rD.g.onFrame((DD => {
            const sD = AD.e.getActiveConsumerName(),
              KD = wD(),
              rD = KD ? (0, RD.g)("menuBack") : null,
              LD = null !== sD && "gameplay" !== sD,
              {
                continues: cD,
                back: gD,
                consumeHeld: ID
              } = pD.onPadFrame(DD, LD, rD, (0, fD.s)(DD));
            if (ID) {
              const DD = (0, UD.g)().swapSticks ? "right" : "left";
              AD.e.consumeAllHeld(pD.consumeLeavesMoveStick() ? DD : null)
            }
            gD ? null === KD || void 0 === KD || KD() : cD && zD()
          })),
          gD = (0, ws.j)(`pressToContinue:${DD}`, (() => pD.blocksGameplay()));
        return {
          setArmed: DD => {
            pD.setArmed(DD)
          },
          dispose: () => {
            window.removeEventListener("keydown", sD, !0), window.removeEventListener("keyup", KD, !0), window.removeEventListener("blur", LD), cD(), gD()
          }
        }
      };
    var Fr = wD(5021),
      Yr = wD(3432),
      Hr = wD(3115),
      qr = wD(8218);
    const DL = DD => {
        let {
          text: zD
        } = DD;
        return (0, ZD.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: zD
        })
      },
      zL = DD => {
        let {
          label: zD,
          hint: wD,
          options: pD,
          value: KD,
          onChange: rD
        } = DD;
        const {
          t: LD
        } = (0, sD.E)();
        return (0, ZD.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ZD.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, ZD.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, ZD.jsx)("div", {
                className: "SliderText",
                children: zD
              }), wD && (0, ZD.jsx)("div", {
                className: "ControllerSettingsHint",
                children: wD
              })]
            }), (0, ZD.jsx)(Hr.c, {
              options: pD.map((DD => ({
                label: "label" in DD ? DD.label : LD(DD.labelKey),
                value: DD.value
              }))),
              value: KD,
              onChange: DD => {
                rD(DD.value)
              }
            })]
          })
        })
      },
      wL = DD => {
        let {
          settingKey: zD,
          label: wD,
          range: pD,
          format: sD
        } = DD;
        const KD = (0, UD.n)();
        return (0, ZD.jsx)(Fr.e, {
          name: wD,
          min: pD.min,
          max: pD.max,
          step: pD.step,
          padStep: pD.step,
          initValue: KD[zD],
          format: sD,
          onChange: DD => {
            (0, UD.l)({
              [zD]: (0, qr.A)(DD, pD)
            })
          }
        })
      };
    var pL = wD(8855),
      sL = wD(8859);
    const KL = DD => DD instanceof DOMException && ("SecurityError" === DD.name || "NotAllowedError" === DD.name),
      rL = DD => {
        const [zD] = [...DD.controllers].sort(((DD, zD) => sL.k[DD] - sL.k[zD]));
        return sL.j[zD]
      },
      LL = DD => {
        (0, pL.c)().allowPhoneMotion().catch((zD => {
          DD && KL(zD) ? DD() : console.warn("Could not enable the motion sensor", zD)
        }))
      },
      cL = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      gL = DD => {
        let {
          status: zD
        } = DD;
        const {
          t: wD
        } = (0, sD.E)(), [pD, KD] = (0, lD.useState)(null), rD = `${zD.controllers.join(",")}|${zD.phoneMotion}`;
        (0, lD.useEffect)((() => {
          KD(null)
        }), [rD]);
        const LD = () => {
          (0, pL.c)().connectController().then((DD => {
            KD(DD > 0 ? "openFailed" : null)
          })).catch((DD => {
            KL(DD) ? KD("needsClick") : console.warn("Could not connect motion controller", DD)
          }))
        };
        if (zD.hidSupported) {
          let DD = wD("controller:settingsGyroConnectHint");
          return "needsClick" === pD ? DD = wD("controller:settingsGyroConnectNeedsClick") : "openFailed" === pD ? DD = wD("controller:settingsGyroOpenFailed") : zD.controllers.length > 0 && (DD = wD("controller:settingsGyroConnected", {
            name: rL(zD)
          })), (0, ZD.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, ZD.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, ZD.jsx)("div", {
                className: "ControllerSettingsHint",
                children: DD
              }), (0, ZD.jsx)(lr.f, {
                onClick: LD,
                children: wD("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === zD.phoneMotion) return (0, ZD.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ZD.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === pD && (0, ZD.jsx)("div", {
              className: "ControllerSettingsHint",
              children: wD("controller:settingsGyroAllowNeedsTap")
            }), (0, ZD.jsx)(lr.f, {
              onClick: () => {
                LL((() => {
                  KD("needsTap")
                }))
              },
              children: wD("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const cD = cL[zD.phoneMotion];
        return cD ? (0, ZD.jsx)("div", {
          className: "ControllerSettingsHint",
          children: wD(cD)
        }) : null
      },
      RL = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, UD.n)(), wD = (0, pL.g)(), pD = (0, fD.G)(), KD = !wD.hidSupported && wD.phoneSupported && !wD.padConnected, rD = (wD.hidSupported || wD.phoneSupported) && !KD, LD = (0, RD.g)("pause");
        return (0, ZD.jsxs)(ZD.Fragment, {
          children: [(0, ZD.jsx)(DL, {
            text: DD("controller:settingsGyro")
          }), KD && (0, ZD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsGyroPhoneNeedsController")
          }), !rD && !KD && (0, ZD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD(wD.hidBlocked || wD.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), rD && (0, ZD.jsx)(Fr.b, {
            label: DD(wD.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: zD.gyroAiming,
            onClick: DD => {
              var zD, wD;
              (0, UD.l)({
                gyroAiming: DD
              });
              const pD = null === (zD = null === (wD = navigator.userActivation) || void 0 === wD ? void 0 : wD.isActive) || void 0 === zD || zD;
              if (!DD || !pD) return;
              const sD = (0, pL.c)(),
                KD = sD.getStatus();
              KD.hidSupported ? sD.connectControllerIfNoneGranted().catch((DD => {
                console.warn("Motion controller picker unavailable", DD)
              })) : "needsPermission" === KD.phoneMotion && LL()
            },
            circleInfoText: DD(wD.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), rD && wD.hidSupported && (0, ZD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsGyroSteamHint")
          }), rD && zD.gyroAiming && (0, ZD.jsxs)(ZD.Fragment, {
            children: [(0, ZD.jsx)(gL, {
              status: wD
            }), (0, ZD.jsx)(wL, {
              settingKey: "gyroSensitivity",
              label: DD("controller:settingsGyroSensitivity"),
              range: qr.Y,
              format: qr.P
            }), (0, ZD.jsx)(zL, {
              label: DD("controller:settingsGyroActivation"),
              hint: "aiming" === zD.gyroActivation && (0, ZD.jsx)(Yr.b, {
                text: DD("controller:settingsGyroAimingHint", {
                  button: Yr.c
                }),
                glyph: (0, RD.g)("use")
              }),
              options: qr.V,
              value: zD.gyroActivation,
              onChange: DD => {
                (0, UD.l)({
                  gyroActivation: DD
                })
              }
            }), "button" === zD.gyroActivation && (0, ZD.jsx)(zL, {
              label: DD("controller:settingsGyroButton"),
              hint: DD("controller:settingsGyroButtonHint"),
              options: qr.t.filter((DD => DD !== LD || DD === zD.gyroButton)).map((DD => ({
                label: Xs(pD, DD),
                value: DD
              }))),
              value: zD.gyroButton,
              onChange: DD => {
                (0, UD.l)({
                  gyroButton: DD
                })
              }
            })]
          })]
        })
      };
    var AL = wD(1847);
    const UL = () => {
      const {
        t: DD
      } = (0, sD.E)(), zD = (0, UD.n)(), wD = (0, fD.G)();
      return (0, ZD.jsxs)(ZD.Fragment, {
        children: [(0, ZD.jsx)(DL, {
          text: DD("controller:settingsAccessibility")
        }), (0, ZD.jsx)(Fr.b, {
          label: DD("controller:settingsSwapConfirmBack"),
          checked: (0, RD.G)(zD.swapConfirmBack, wD),
          onClick: DD => {
            (0, UD.l)({
              swapConfirmBack: DD === (0, RD.G)(null, wD) ? null : DD
            }), AL.d.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: DD("controller:settingsSwapConfirmBackInfo")
        }), (0, ZD.jsx)(zL, {
          label: DD("controller:settingsButtonRepeat"),
          hint: DD("controller:settingsButtonRepeatHint"),
          options: qr.q,
          value: zD.buttonRepeat,
          onChange: DD => {
            (0, UD.l)({
              buttonRepeat: DD
            })
          }
        }), (0, ZD.jsx)(zL, {
          label: DD("controller:settingsTapHoldTime"),
          hint: DD("controller:settingsTapHoldTimeHint"),
          options: qr.ub,
          value: zD.tapHoldTime,
          onChange: DD => {
            (0, UD.l)({
              tapHoldTime: DD
            })
          }
        }), (0, ZD.jsx)(zL, {
          label: DD("controller:settingsEmoteButton"),
          hint: DD("wheel" === zD.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: qr.I,
          value: zD.emoteButton,
          onChange: DD => {
            (0, UD.l)({
              emoteButton: DD
            })
          }
        }), (0, ZD.jsx)(zL, {
          label: DD("controller:settingsAttackMode"),
          hint: DD("toggle" === zD.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: qr.p,
          value: zD.attackMode,
          onChange: DD => {
            (0, UD.l)({
              attackMode: DD
            })
          }
        }), (0, ZD.jsx)(Fr.b, {
          label: DD("controller:settingsLargePointer"),
          checked: zD.largePointer,
          onClick: DD => {
            (0, UD.l)({
              largePointer: DD
            })
          },
          circleInfoText: DD("controller:settingsLargePointerInfo")
        })]
      })
    };
    var fL = wD(8865);
    const IL = new class {
        constructor(DD) {
          this.router = DD, this.current = null
        }
        claim(DD, zD) {
          const wD = this.current;
          wD && (this.current = null, wD.release(), wD.onTakenOver());
          const pD = this.router.register({
              ...DD,
              name: "capture"
            }),
            sD = {
              release: pD,
              onTakenOver: zD
            };
          return this.current = sD, () => {
            this.current === sD && (this.current = null), pD()
          }
        }
      }(AD.e),
      BL = DD => {
        (0, lD.useEffect)((() => {
          if (!DD) return;
          const zD = DD();
          let wD = !1;
          const pD = () => {
              wD || (wD = !0, zD.onEnd())
            },
            sD = IL.claim({
              isActive: () => !wD,
              onFrame: DD => {
                zD.onFrame(DD, pD)
              }
            }, pD),
            KD = void 0 === zD.timeoutMs ? void 0 : window.setTimeout(pD, zD.timeoutMs),
            rD = DD => {
              "Escape" === DD.key && (DD.preventDefault(), DD.stopPropagation(), pD())
            };
          return window.addEventListener("keydown", rD, !0), () => {
            wD = !0, sD(), window.clearTimeout(KD), window.removeEventListener("keydown", rD, !0)
          }
        }), [DD])
      },
      GL = DD => {
        let {
          row: zD,
          capturing: wD,
          onCapture: pD,
          holdFillRef: KD,
          onRebind: rD,
          swapped: LD
        } = DD;
        const {
          t: cD
        } = (0, sD.E)();
        if ("fixed" === zD.kind) return (0, ZD.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, ZD.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ZD.jsx)("div", {
              className: "ControlName",
              children: cD(zD.labelKey)
            }), (0, ZD.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, ZD.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, ZD.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, ZD.jsx)(Vs, {
                    glyph: "move" === zD.stick ? (0, RD.r)() : (0, RD.q)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: gD
        } = zD, AD = (0, RD.g)(gD), UD = (0, RD.j)(gD), fD = AD !== UD && (0, RD.e)(gD, UD);
        return (0, ZD.jsxs)("div", {
          className: ND()("ControlRow PadControlRow", {
            Capturing: wD
          }),
          children: [(0, ZD.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ZD.jsx)("div", {
              className: "ControlName",
              children: cD(qr.j[gD])
            }), (0, ZD.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!wD && (0, ZD.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, ZD.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    pD(gD)
                  },
                  children: (0, ZD.jsx)(Vs, {
                    glyph: AD
                  })
                }), fD && (0, ZD.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: cD("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    rD(gD, UD)
                  },
                  children: (0, ZD.jsx)(Sr.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), wD && (0, ZD.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, ZD.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, ZD.jsx)("span", {
                    children: cD("controller:settingsCapturePrompt")
                  }), (0, ZD.jsx)("div", {
                    ref: KD,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, ZD.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    pD(null)
                  },
                  children: "\xd7"
                })]
              }), wD && (0, ZD.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, ZD.jsx)(Yr.b, {
                  text: cD((0, RD.e)(gD, (0, RD.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Yr.c
                  }),
                  glyph: (0, RD.g)("menuBack")
                })
              })]
            })]
          }), LD.map((DD => (0, ZD.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, ZD.jsx)(Yr.b, {
              text: cD("controller:settingsSwapNotice", {
                action: cD(qr.j[DD]),
                button: Yr.c
              }),
              glyph: (0, RD.g)(DD)
            })
          }, DD))), wD && (0, ZD.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${qr.x}ms`
            }
          })]
        })
      },
      hL = [],
      nL = DD => {
        let {
          layoutSetting: zD
        } = DD;
        const {
          t: wD
        } = (0, sD.E)(), pD = (0, UD.n)();
        (0, fD.G)();
        const KD = (0, lD.useRef)(null),
          [rD, LD] = (0, lD.useState)(null),
          cD = (0, lD.useCallback)(((DD, zD) => {
            const wD = (0, UD.g)().bindings;
            (0, RD.A)(DD, zD);
            const pD = (0, RD.t)(wD, DD);
            LD(pD.length > 0 ? {
              action: DD,
              swapped: pD
            } : null)
          }), []),
          [gD, BD] = ((DD, zD) => {
            const [wD, pD] = (0, lD.useState)(null), sD = (0, lD.useMemo)((() => wD ? () => {
              const sD = (0, RD.g)("menuBack"),
                KD = new qr.e(sD, (0, RD.g)("menuConfirm"), (DD => (0, RD.e)(wD, DD)));
              return {
                onFrame: (pD, rD) => {
                  var LD;
                  const cD = pD.frame.timestampMs,
                    gD = KD.update({
                      ...pD,
                      isDown: DD => (0, ID.D)(pD.frame.values, DD)
                    }, cD);
                  null === (LD = DD.current) || void 0 === LD || LD.style.setProperty("width", 100 * KD.getBindHoldProgress(cD) + "%"), gD && ("bind" === gD.kind ? (AD.e.consumeButton(gD.button), zD(wD, gD.button)) : AD.e.consumeButton(sD), rD())
                },
                onEnd: () => {
                  pD(null)
                },
                timeoutMs: qr.x
              }
            } : null), [wD, DD, zD]);
            return BL(sD), [wD, pD]
          })(KD, cD),
          GD = DD => {
            DD && LD(null), BD(DD)
          };
        (0, lD.useEffect)((() => {
          if (!rD) return;
          const DD = window.setTimeout((() => {
            LD(null)
          }), qr.rb);
          return () => {
            window.clearTimeout(DD)
          }
        }), [rD]);
        const hD = !pD.swapSticks && 0 === Object.keys(pD.bindings).length;
        return (0, ZD.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, ZD.jsx)("div", {
            className: "SliderText",
            children: wD("controller:settingsRemap")
          }), (0, ZD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: wD("controller:settingsRemapHint")
          }), (0, ZD.jsx)(lr.R, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: hD,
            onClick: () => {
              GD(null), LD(null), (0, RD.D)()
            },
            children: wD("controller:settingsResetAll")
          }), zD, qr.nb.map(((DD, zD) => (0, ZD.jsx)(fL.d, {
            title: wD(DD.titleKey),
            defaultOpen: 0 === zD,
            children: DD.rows.map((DD => (0, ZD.jsx)(GL, {
              row: DD,
              capturing: "action" === DD.kind && DD.action === gD,
              onCapture: GD,
              holdFillRef: KD,
              onRebind: cD,
              swapped: "action" === DD.kind && (null === rD || void 0 === rD ? void 0 : rD.action) === DD.action ? rD.swapped : hL
            }, "action" === DD.kind ? DD.action : DD.labelKey)))
          }, DD.titleKey)))]
        })
      },
      ML = DD => {
        let {
          deadzone: zD,
          dotRef: wD,
          labelKey: pD
        } = DD;
        const {
          t: KD
        } = (0, sD.E)();
        return (0, ZD.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, ZD.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, ZD.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * zD + "%",
                height: 100 * zD + "%"
              }
            }), (0, ZD.jsx)("div", {
              ref: wD,
              className: "ControllerTesterDot"
            })]
          }), (0, ZD.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: KD(pD)
          })]
        })
      },
      OL = (DD, zD, wD, pD) => {
        var sD;
        DD && (DD.style.left = 50 + 50 * Math.max(-1, Math.min(1, zD.x)) + "%", DD.style.top = 50 + 50 * Math.max(-1, Math.min(1, zD.y)) + "%", null === (sD = DD.parentElement) || void 0 === sD || sD.classList.toggle("Active", pD || Math.hypot(zD.x, zD.y) > wD))
      },
      JL = DD => {
        const zD = {
            deadzone: DD.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          wD = {
            deadzone: DD.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return DD.swapSticks ? {
          left: wD,
          right: zD
        } : {
          left: zD,
          right: wD
        }
      },
      EL = () => {
        const {
          t: DD
        } = (0, sD.E)(), zD = (() => {
          const [DD, zD] = (0, lD.useState)((() => rD.g.getActivePad()));
          return (0, ns.g)(rD.d, (() => {
            zD(rD.g.getActivePad())
          })), DD
        })(), wD = JL((0, UD.n)()), pD = (0, lD.useRef)(null), KD = (0, lD.useRef)(null), LD = (0, lD.useRef)([]), cD = (0, lD.useRef)(null), gD = (0, lD.useRef)(null), [fD, BD] = (DD => {
          const [zD, wD] = (0, lD.useState)(!1), pD = (0, lD.useMemo)((() => zD ? () => {
            const zD = (0, RD.g)("menuBack"),
              pD = new qr.g;
            return {
              onFrame: (wD, sD) => {
                var KD;
                const rD = pD.update({
                  pressed: wD.wasPressed(zD),
                  Qg: wD.isHeld(zD)
                }, wD.frame.timestampMs);
                null === (KD = DD.current) || void 0 === KD || KD.style.setProperty("width", 100 * rD + "%"), rD >= 1 && (AD.e.consumeButton(zD), sD())
              },
              onEnd: () => {
                wD(!1)
              }
            }
          } : null), [zD, DD]);
          return BL(pD), [zD, wD]
        })(KD);
        (0, lD.useEffect)((() => {
          const DD = DD => {
            for (const wD of ID.U) {
              const zD = (0, ID.m)(wD),
                pD = LD.current[zD];
              if (!pD) continue;
              const sD = DD.values[zD];
              pD.classList.toggle("Pressed", sD >= ID.s), (0, ID.F)(zD) && pD.style.setProperty("--trigger-fill", `${Math.round(100*sD)}%`)
            }
            const zD = JL((0, UD.g)());
            OL(cD.current, DD.leftStick, zD.left.deadzone, DD.values[(0, ID.m)("LS")] >= ID.s), OL(gD.current, DD.rightStick, zD.right.deadzone, DD.values[(0, ID.m)("RS")] >= ID.s)
          };
          return zD || DD((0, ID.r)()), rD.g.onFrame(DD)
        }), [zD]), (0, lD.useEffect)((() => {
          zD || BD(!1)
        }), [zD, BD]), (0, lD.useEffect)((() => {
          var DD;
          fD && (null === (DD = pD.current) || void 0 === DD || DD.scrollIntoView({
            block: "nearest"
          }))
        }), [fD]);
        const GD = qr.ib.find((DD => DD.value === (null === zD || void 0 === zD ? void 0 : zD.family)));
        return (0, ZD.jsxs)("div", {
          ref: pD,
          className: ND()("SettingBox ControllerTester", {
            Testing: fD
          }),
          children: [(0, ZD.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, ZD.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [zD && (0, ZD.jsx)("div", {
                children: DD("controller:settingsTesterFamily", {
                  family: GD ? DD(GD.labelKey) : zD.family
                })
              }), zD && (0, ZD.jsx)("div", {
                className: "ControllerTesterPadId",
                children: zD.id
              }), !zD && (0, ZD.jsx)("div", {
                children: DD("controller:settingsTesterNoPad")
              })]
            }), (zD || fD) && (0, ZD.jsx)(lr.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                BD(!fD)
              },
              children: DD(fD ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), zD && !fD && (0, ZD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsTesterHint")
          }), fD && (0, ZD.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, ZD.jsx)(Yr.b, {
              text: DD("controller:settingsTesterTesting", {
                button: Yr.c
              }),
              glyph: (0, RD.g)("menuBack")
            }), (0, ZD.jsx)("div", {
              ref: KD,
              className: "ControllerTesterExitFill"
            })]
          }), (0, ZD.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, ZD.jsx)(ML, {
              deadzone: wD.left.deadzone,
              dotRef: cD,
              labelKey: wD.left.labelKey
            }), (0, ZD.jsx)("div", {
              className: "ControllerTesterButtons",
              children: ID.U.map((DD => {
                const wD = (0, ID.m)(DD);
                return (0, ZD.jsx)("div", {
                  ref: DD => {
                    LD.current[wD] = DD
                  },
                  className: (0, ID.F)(wD) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, ZD.jsx)(Vs, {
                    glyph: DD,
                    family: null === zD || void 0 === zD ? void 0 : zD.family
                  })
                }, DD)
              }))
            }), (0, ZD.jsx)(ML, {
              deadzone: wD.right.deadzone,
              dotRef: gD,
              labelKey: wD.right.labelKey
            })]
          })]
        })
      },
      QL = (0, lD.memo)((function() {
        const {
          t: DD
        } = (0, sD.E)(), zD = (0, UD.n)(), [wD, pD] = (0, lD.useState)(!1);
        return (0, lD.useEffect)((() => {
          if (!wD) return;
          const DD = window.setTimeout((() => {
            pD(!1)
          }), qr.rb);
          return () => {
            window.clearTimeout(DD)
          }
        }), [wD]), (0, ZD.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, ZD.jsx)(DL, {
            text: DD("controller:settingsLook")
          }), (0, ZD.jsx)(wL, {
            settingKey: "lookSensitivityX",
            label: DD("controller:settingsLookSensitivityX"),
            range: qr.ob,
            format: qr.S
          }), (0, ZD.jsx)(wL, {
            settingKey: "lookSensitivityY",
            label: DD("controller:settingsLookSensitivityY"),
            range: qr.ob,
            format: qr.S
          }), (0, ZD.jsx)(wL, {
            settingKey: "aimLookSensitivity",
            label: DD("controller:settingsAimLookSensitivity"),
            range: qr.m,
            format: qr.S
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsLookCurve"),
            hint: DD("controller:settingsLookCurveHint"),
            options: qr.eb,
            value: zD.lookCurve,
            onChange: DD => {
              (0, UD.l)({
                lookCurve: DD
              })
            }
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsInvertLookX"),
            checked: zD.invertLookX,
            onClick: DD => {
              (0, UD.l)({
                invertLookX: DD
              })
            }
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsInvertLookY"),
            checked: zD.invertLookY,
            onClick: DD => {
              (0, UD.l)({
                invertLookY: DD
              })
            }
          }), (0, ZD.jsx)(wL, {
            settingKey: "lookDeadzone",
            label: DD("controller:settingsLookDeadzone"),
            range: qr.E,
            format: qr.L
          }), (0, ZD.jsx)(RL, {}), (0, ZD.jsx)(DL, {
            text: DD("controller:settingsMovement")
          }), (0, ZD.jsx)(wL, {
            settingKey: "moveDeadzone",
            label: DD("controller:settingsMoveDeadzone"),
            range: qr.E,
            format: qr.L
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsAutoSprint"),
            checked: zD.autoSprint,
            onClick: DD => {
              (0, UD.l)({
                autoSprint: DD
              })
            },
            circleInfoText: DD("controller:settingsAutoSprintInfo")
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsSneak"),
            options: qr.pb,
            value: zD.sneakMode,
            onChange: DD => {
              (0, UD.l)({
                sneakMode: DD
              })
            }
          }), (0, ZD.jsx)(DL, {
            text: DD("controller:settingsButtons")
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsPromptFamily"),
            options: qr.ib,
            value: zD.promptFamily,
            onChange: DD => {
              (0, UD.l)({
                promptFamily: DD
              })
            }
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsHideButtonHints"),
            checked: zD.hideButtonHints,
            onClick: DD => {
              (0, UD.l)({
                hideButtonHints: DD
              })
            }
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsVibration"),
            checked: zD.vibration,
            onClick: DD => {
              (0, UD.l)({
                vibration: DD
              }), DD && Ls("preview")
            }
          }), (0, ZD.jsx)(wL, {
            settingKey: "cursorSpeed",
            label: DD("controller:settingsCursorSpeed"),
            range: qr.D,
            format: qr.S
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsCursorMagnetism"),
            checked: zD.cursorMagnetism,
            onClick: DD => {
              (0, UD.l)({
                cursorMagnetism: DD
              })
            }
          }), (0, ZD.jsx)(Fr.b, {
            label: DD("controller:settingsMenuBackToCategories"),
            checked: zD.menuBackToCategories,
            onClick: DD => {
              (0, UD.l)({
                menuBackToCategories: DD
              })
            }
          }), (0, ZD.jsx)(nL, {
            layoutSetting: (0, ZD.jsxs)(ZD.Fragment, {
              children: [RD.f.map((wD => (0, ZD.jsx)(Fr.b, {
                label: DD(qr.cb[wD]),
                checked: (0, RD.z)(wD, zD),
                onClick: DD => {
                  pD(!(0, RD.K)(wD, DD))
                }
              }, wD))), wD && (0, ZD.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: DD("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, ZD.jsx)(UL, {}), (0, ZD.jsx)(DL, {
            text: DD("controller:settingsAlternatives")
          }), (0, ZD.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DD("controller:settingsAlternativesHint")
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsMenuNavigation"),
            hint: DD("controller:settingsMenuNavigationHint"),
            options: qr.hb,
            value: zD.menuNavigation,
            onChange: DD => {
              (0, UD.l)({
                menuNavigation: DD
              })
            }
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsInventoryNavigation"),
            hint: DD("controller:settingsInventoryNavigationHint"),
            options: qr.ab,
            value: zD.inventoryNavigation,
            onChange: DD => {
              (0, UD.l)({
                inventoryNavigation: DD
              })
            }
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsQuickChat"),
            hint: DD("controller:settingsQuickChatHint"),
            options: qr.lb,
            value: zD.quickChat,
            onChange: DD => {
              (0, UD.l)({
                quickChat: DD
              })
            }
          }), (0, ZD.jsx)(zL, {
            label: DD("controller:settingsLeaderboardButton"),
            hint: DD("controller:settingsLeaderboardButtonHint"),
            options: qr.db,
            value: zD.leaderboardButton,
            onChange: DD => {
              (0, UD.l)({
                leaderboardButton: DD
              })
            }
          }), (0, ZD.jsx)(DL, {
            text: DD("controller:settingsTester")
          }), (0, ZD.jsx)(EL, {})]
        })
      }));
    (0, sD.c)(pD);
    for (const xL of (0, KD.l)()) xL.connected ? rD.g.handleConnectionEvent(xL) : rD.g.handleDisconnectionEvent(xL);
    const XL = () => null !== rD.g.getActivePad(),
      VL = () => sw.getState(),
      PL = () => sw.isSteppingSlots(),
      CL = (DD, zD) => {
        const wD = zs.getFocused();
        zs.isActive() && wD && DD.contains(wD) && zs.setFocus(zD, {
          scroll: !1
        })
      }
  },
  8189: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD,
      e: () => gD
    });
    var pD = wD(1410),
      sD = wD(1406);
    const KD = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      rD = "28de",
      LD = new Set(["1205"]),
      cD = (DD, zD) => {
        const wD = (0, pD.c)(DD);
        if ((null === wD || void 0 === wD ? void 0 : wD.vendor) === rD) return LD.has(wD.product) ? "steamdeck" : "xbox";
        if (wD && KD[wD.vendor]) return KD[wD.vendor];
        if ((0, sD.b)(DD)) return "nintendo";
        const cD = `${DD} ${null!==zD&&void 0!==zD?zD:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(cD) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(cD) ? "nintendo" : /steam deck/.test(cD) ? "steamdeck" : "xbox"
      },
      gD = DD => {
        var zD;
        return (null === (zD = (0, pD.c)(DD)) || void 0 === zD ? void 0 : zD.vendor) === rD
      }
  },
  8226: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      h: () => LD
    });
    var pD = wD(8184);
    const sD = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      KD = new Set(["capture", "gameplay"]),
      rD = ["Up", "Down", "Left", "Right"],
      LD = DD => rD.includes(DD),
      cD = .25;
    const gD = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Qg = new Array(pD.R).fill(!1), this.previousHeld = new Array(pD.R).fill(!1), this.consumedButtons = new Array(pD.R).fill(!1), this.suppressedReleases = new Array(pD.R).fill(!1), this.wakeOwned = new Array(pD.R).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, pD.r)()
      }
      register(DD) {
        return this.consumers.has(DD.name) && console.warn(`Controller consumer "${DD.name}" registered twice; the newer one replaces it.`), this.consumers.set(DD.name, DD), () => {
          var zD;
          this.consumers.get(DD.name) === DD && (this.activeName === DD.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (zD = this.peek) || void 0 === zD ? void 0 : zD.over) === DD.name && (this.peek = null), this.consumers.delete(DD.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(DD) {
        return this.Qg[(0, pD.m)(DD)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Qg = new Array(pD.R).fill(!1), this.previousHeld = new Array(pD.R).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, pD.r)()
      }
      dispatch(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = DD, this.previousHeld = this.Qg, this.Qg = (0, pD.p)(DD.values, this.previousHeld);
        for (let KD = 0; KD < pD.R; KD++) this.suppressedReleases[KD] = !this.Qg[KD] && this.consumedButtons[KD], this.Qg[KD] || (this.consumedButtons[KD] = !1), this.wakeOwned[KD] && (this.Qg[KD] ? (this.consumedButtons[KD] = !0, this.wakeOwned[KD] = !1) : DD.values[KD] < pD.O && (this.wakeOwned[KD] = !1));
        Math.hypot(DD.leftStick.x, DD.leftStick.y) < cD && (this.leftStickConsumed = !1), Math.hypot(DD.rightStick.x, DD.rightStick.y) < cD && (this.rightStickConsumed = !1);
        const sD = this.pickActive();
        if ((null === sD || void 0 === sD ? void 0 : sD.name) !== this.activeName) {
          var rD, LD, gD, RD, AD, UD;
          const DD = this.activeName,
            zD = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            wD = null !== (rD = null === sD || void 0 === sD || null === (LD = sD.peek) || void 0 === LD ? void 0 : LD.call(sD)) && void 0 !== rD ? rD : null,
            KD = null === DD && !!wD && !(null === (gD = this.consumers.get(wD.over)) || void 0 === gD || !gD.onPeekFrame),
            cD = wD && (wD.over === DD || KD) ? wD : null,
            fD = null !== this.peek && this.peek.over === (null === sD || void 0 === sD ? void 0 : sD.name) ? this.peek : null;
          this.deactivateCurrent(null !== cD, null !== fD), this.activeName = null !== (RD = null === sD || void 0 === sD ? void 0 : sD.name) && void 0 !== RD ? RD : null, null === DD || this.handOffPending || this.consumeAllHeld();
          const ID = null === (AD = null !== cD && void 0 !== cD ? cD : fD) || void 0 === AD ? void 0 : AD.stick;
          "left" === ID && zD.left ? this.leftStickConsumed = !1 : "right" === ID && zD.right && (this.rightStickConsumed = !1), this.peek = cD, sD || null === DD ? sD && (null === (UD = this.idleResume) || void 0 === UD ? void 0 : UD.name) === sD.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: DD,
            left: zD.left && this.leftStickConsumed,
            right: zD.right && this.rightStickConsumed
          }, sD && (this.idleResume = null);
          for (let sD = 0; sD < pD.R; sD++) this.previousHeld[sD] && !this.Qg[sD] && (this.suppressedReleases[sD] = !0)
        }
        var fD, ID;
        (this.handOffPending = !1, sD) && (wD && !KD.has(sD.name) && this.consumeWakePress(sD), sD.onFrame(this.buildInput(DD, zD, wD)), this.peek && (null === (fD = this.consumers.get(this.peek.over)) || void 0 === fD || null === (ID = fD.onPeekFrame) || void 0 === ID || ID.call(fD, this.buildInput(DD, zD, !1, this.peek.stick))))
      }
      consumeWakePress(DD) {
        for (let sD = 0; sD < pD.R; sD++) {
          var zD, wD;
          const KD = pD.U[sD];
          (null !== (zD = null === (wD = DD.wakePressActs) || void 0 === wD ? void 0 : wD.call(DD, KD)) && void 0 !== zD ? zD : rD.includes(KD)) || (this.Qg[sD] ? this.consumedButtons[sD] = !0 : this.lastFrame.values[sD] >= pD.M && (this.wakeOwned[sD] = !0))
        }
      }
      pickActive() {
        for (const DD of sD) {
          const zD = this.consumers.get(DD);
          if (zD && zD.isActive()) return zD
        }
        return null
      }
      deactivateCurrent() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var wD, pD, sD, KD;
        this.activeName && (null === (wD = this.consumers.get(this.activeName)) || void 0 === wD || null === (pD = wD.onDeactivate) || void 0 === pD || pD.call(wD, DD));
        this.peek && !zD && (null === (sD = this.consumers.get(this.peek.over)) || void 0 === sD || null === (KD = sD.onDeactivate) || void 0 === KD || KD.call(sD, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let sD = 0; sD < pD.R; sD++) this.Qg[sD] && (this.consumedButtons[sD] = !0);
        const {
          leftStick: zD,
          rightStick: wD
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== DD && (this.leftStickConsumed || Math.hypot(zD.x, zD.y) >= cD), this.rightStickConsumed = "right" !== DD && (this.rightStickConsumed || Math.hypot(wD.x, wD.y) >= cD)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(DD) {
        const zD = (0, pD.m)(DD);
        this.Qg[zD] && (this.consumedButtons[zD] = !0)
      }
      buildInput(DD, zD, wD, sD) {
        const KD = this.Qg,
          rD = this.previousHeld,
          LD = sD ? new Array(pD.R).fill(!0) : [...this.consumedButtons],
          cD = sD ? LD : [...this.suppressedReleases],
          gD = !this.leftStickConsumed && (!sD || "left" === sD),
          RD = !this.rightStickConsumed && (!sD || "right" === sD);
        return {
          frame: DD,
          dtMs: zD,
          isHeld: DD => {
            const zD = (0, pD.m)(DD);
            return KD[zD] && !LD[zD]
          },
          wasPressed: DD => {
            const zD = (0, pD.m)(DD);
            return KD[zD] && !rD[zD] && !LD[zD]
          },
          wasReleased: DD => {
            const zD = (0, pD.m)(DD);
            return !KD[zD] && rD[zD] && !cD[zD]
          },
          value: zD => {
            const wD = (0, pD.m)(zD);
            return LD[wD] ? 0 : DD.values[wD]
          },
          leftStick: gD ? DD.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: RD ? DD.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: wD
        }
      }
    }
  },
  8208: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => AD.f,
      d: () => AD.j,
      g: () => CD,
      j: () => xD,
      l: () => TD,
      n: () => bD
    });
    var pD = wD(58),
      sD = wD(25),
      KD = wD(1442),
      rD = wD(35),
      LD = wD(8213),
      cD = wD(8184),
      gD = wD(8201),
      RD = wD(8178),
      AD = wD(2e3),
      UD = wD(8218);
    const fD = {
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
      ID = "controllerSettings",
      BD = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      GD = ["auto", ...LD.c],
      hD = (DD, zD) => "string" === typeof zD && DD.includes(zD),
      nD = DD => zD => "number" === typeof zD && Number.isFinite(zD) ? (0, UD.A)(zD, DD) : void 0,
      MD = DD => "boolean" === typeof DD ? DD : void 0,
      OD = DD => zD => hD(DD, zD) ? zD : void 0,
      JD = {
        lookSensitivityX: nD(UD.ob),
        lookSensitivityY: nD(UD.ob),
        aimLookSensitivity: nD(UD.m),
        invertLookX: MD,
        invertLookY: MD,
        lookCurve: OD(cD.I),
        lookDeadzone: nD(UD.E),
        moveDeadzone: nD(UD.E),
        swapSticks: MD,
        autoSprint: MD,
        sneakMode: OD(["toggle", "hold"]),
        tapHoldTime: OD(["short", "medium", "long"]),
        attackMode: OD(["hold", "toggle"]),
        promptFamily: OD(GD),
        hideButtonHints: MD,
        vibration: MD,
        cursorSpeed: nD(UD.D),
        cursorMagnetism: MD,
        buttonRepeat: OD(cD.o),
        largePointer: MD,
        menuBackToCategories: MD,
        swapConfirmBack: MD,
        menuNavigation: OD(["hybrid", "focus", "cursor"]),
        inventoryNavigation: OD(["hybrid", "slot", "cursor"]),
        quickChat: OD(["wheel", "off"]),
        leaderboardButton: OD(["shop", "leaderboard"]),
        gyroAiming: MD,
        gyroSensitivity: nD(UD.Y),
        gyroActivation: OD(["always", "aiming", "button"]),
        gyroButton: OD(cD.U),
        emoteButton: OD(["tapHold", "wheel"])
      },
      ED = [{
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
      QD = DD => {
        const zD = {};
        if ("object" !== typeof DD || null === DD) return zD;
        for (const [wD, pD] of Object.entries(DD)) Object.prototype.hasOwnProperty.call(gD.c, wD) && hD(cD.U, pD) && (zD[wD] = pD);
        return zD
      },
      XD = DD => {
        const zD = {};
        for (const wD of Object.keys(fD))("bindings" === wD ? Object.keys(DD.bindings).length > 0 : DD[wD] !== fD[wD]) && (zD[wD] = DD[wD]);
        0 !== Object.keys(zD).length ? rD.h.setItem(ID, zD) : rD.h.removeItem(ID)
      };
    let VD = (() => {
        const DD = rD.h.getItem(ID),
          zD = (DD => {
            const zD = "object" === typeof DD && null !== DD ? DD : {},
              wD = {
                ...fD,
                bindings: QD(zD.bindings)
              };
            for (const sD of Object.keys(JD)) {
              const DD = JD[sD](zD[sD]);
              void 0 !== DD && (wD[sD] = DD)
            }
            const pD = Object.keys(zD).filter((DD => !!Object.prototype.hasOwnProperty.call(fD, DD) && ("bindings" === DD ? "object" !== typeof zD.bindings || null === zD.bindings || Object.keys(zD.bindings).length !== Object.keys(wD.bindings).length : wD[DD] !== zD[DD])));
            return pD.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${pD.join(", ")}`), wD
          })(DD);
        return null !== DD && void 0 !== DD && XD(zD), zD
      })(),
      PD = {
        ...VD,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const DD = {},
            zD = new URLSearchParams(window.location.search);
          for (const {
              param: wD,
              key: pD
            }
            of ED) {
            const sD = JD[pD](zD.get(wD));
            void 0 !== sD && (DD[pD] = sD)
          }
          return DD
        })()
      };
    const CD = () => PD,
      xD = () => {
        var DD, zD;
        const wD = CD().promptFamily;
        return "auto" !== wD ? wD : null !== (DD = null === (zD = RD.g.getActivePad()) || void 0 === zD ? void 0 : zD.family) && void 0 !== DD ? DD : "xbox"
      },
      TD = DD => {
        const zD = PD;
        VD = {
          ...VD,
          ...DD
        }, XD(VD), PD = {
          ...PD,
          ...DD
        }, (DD => {
          sD.l.KG(AD.j, PD), BD.some((zD => DD[zD] !== PD[zD])) && sD.l.KG(AD.f, PD)
        })(zD)
      },
      bD = () => {
        const [DD, zD] = (0, pD.useState)(PD);
        return (0, KD.g)(AD.j, zD), DD
      }
  },
  8655: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    const pD = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      sD = DD => pD.has(DD)
  },
  8178: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD.c,
      g: () => MD
    });
    var pD = wD(8184),
      sD = wD(8189);
    const KD = .1,
      rD = .3;
    class LD {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(DD, zD) {
        const wD = null === this.lastMs ? 0 : Math.min(Math.max(0, zD - this.lastMs), 100);
        this.lastMs = zD;
        const pD = Math.hypot(DD.x, DD.y);
        if (pD >= rD) return this.anchor = null, void(this.returning = !0);
        pD >= KD || (this.returning = !1);
        const sD = this.anchor;
        if (!sD || Math.hypot(DD.x - sD.x, DD.y - sD.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: DD.x,
          y: DD.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += wD, this.steadyMs < 1e3) return;
        const LD = Math.max(pD, Math.hypot(sD.x, sD.y));
        LD < KD ? this.deadzone = 0 : this.returning && (this.deadzone = LD + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(DD) {
        return Math.hypot(DD.x, DD.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : DD
      }
    }
    const cD = (DD, zD) => {
        var wD, pD;
        return null !== (wD = DD && (null === (pD = Object.getOwnPropertyDescriptor(DD, zD)) || void 0 === pD ? void 0 : pD.get)) && void 0 !== wD ? wD : null
      },
      gD = DD => {
        const zD = DD.vendorName;
        return "string" === typeof zD ? zD : void 0
      },
      RD = ((DD, zD) => {
        const wD = cD(DD, "index"),
          pD = cD(DD, "id"),
          sD = cD(DD, "connected"),
          KD = cD(DD, "mapping"),
          rD = cD(DD, "buttons"),
          LD = cD(DD, "axes"),
          RD = cD(zD, "pressed"),
          AD = cD(zD, "value");
        return wD && pD && sD && KD && rD && LD && RD && AD ? DD => {
          const zD = rD.call(DD),
            cD = LD.call(DD),
            UD = {
              index: Number(wD.call(DD)),
              id: String(pD.call(DD)),
              connected: !0 === sD.call(DD),
              mapping: String(KD.call(DD)),
              buttons: [],
              axes: [],
              vendorName: gD(DD)
            };
          for (let wD = 0; wD < zD.length; wD++) UD.buttons.push({
            pressed: !0 === RD.call(zD[wD]),
            value: Number(AD.call(zD[wD]))
          });
          for (let wD = 0; wD < cD.length; wD++) UD.axes.push(Number(cD[wD]));
          return UD
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      AD = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var UD = wD(1403),
      fD = wD(1406);
    const ID = DD => ({
      pressed: DD,
      value: DD ? 1 : 0
    });
    var BD = wD(2e3);
    const GD = rD,
      hD = DD => {
        const zD = new Array(pD.R).fill(0);
        for (let wD = 0; wD < pD.R && wD < DD.buttons.length; wD++) {
          const sD = DD.buttons[wD];
          zD[wD] = sD.pressed && !(0, pD.F)(wD) ? Math.max(sD.value, pD.s) : sD.value
        }
        return zD
      },
      nD = (DD, zD) => {
        var wD, pD;
        return {
          x: null !== (wD = DD.axes[zD]) && void 0 !== wD ? wD : 0,
          y: null !== (pD = DD.axes[zD + 1]) && void 0 !== pD ? pD : 0
        }
      };
    const MD = new class {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RD;
        this.readGamepads = DD, this.requireTrustedPads = zD, this.nativeReader = wD, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = DD => {
          DD.isTrusted && this.trustedIndices.add(DD.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = DD => {
          this.trustedIndices.delete(DD.gamepad.index)
        }, this.DU = DD => {
          if (this.rafId = 0, !this.running) return;
          const zD = 0 === this.lastTimestampMs ? 16 : Math.min(100, DD - this.lastTimestampMs);
          this.lastTimestampMs = DD;
          try {
            this.poll(DD, zD)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.DU))
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
      onFrame(DD) {
        return this.frameListeners.add(DD), () => {
          this.frameListeners.delete(DD)
        }
      }
      onActivePadChanged(DD) {
        return this.connectionListeners.add(DD), () => {
          this.connectionListeners.delete(DD)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(DD) {
        return this.connectedListeners.add(DD), () => {
          this.connectedListeners.delete(DD)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const DD = this.readPads()[this.activeInfo.index],
          zD = DD ? this.readPad(DD) : null;
        return zD && zD.id === this.activeInfo.id ? DD : null
      }
      poll(DD, zD) {
        var wD, sD;
        const KD = this.readPads();
        let rD = null,
          cD = !1;
        const gD = [],
          RD = Math.max(KD.length, this.slots.length);
        for (let MD = 0; MD < RD; MD++) {
          var AD;
          const zD = MD < KD.length ? KD[MD] : null,
            wD = zD ? this.readPad(zD) : null;
          if (!wD || !wD.connected || !this.isUsable(wD)) {
            this.slots[MD] = null;
            continue
          }
          let sD = this.slots[MD];
          sD && sD.id === wD.id || (sD = {
            id: wD.id,
            Qg: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new LD,
            rightRest: new LD
          }, this.slots[MD] = sD);
          const RD = nD(wD, 0),
            UD = nD(wD, 2);
          !sD.leftSettled && Math.hypot(RD.x, RD.y) < GD && (sD.leftSettled = !0), !sD.rightSettled && Math.hypot(UD.x, UD.y) < GD && (sD.rightSettled = !0), sD.leftRest.observe(RD, DD), sD.rightRest.observe(UD, DD);
          const fD = hD(wD),
            ID = (0, pD.p)(fD, sD.Qg),
            BD = sD.Qg,
            OD = ID.map(((DD, zD) => DD && !BD[zD]));
          sD.Qg = ID;
          const JD = {
            pad: wD,
            slot: sD,
            values: fD
          };
          MD === (null === (AD = this.activeInfo) || void 0 === AD ? void 0 : AD.index) && wD.id === this.activeInfo.id ? (rD = JD, cD = OD.includes(!0)) : OD.includes(!0) && gD.push({
            polled: JD,
            rose: OD
          })
        }
        const UD = this.slots.some((DD => null !== DD));
        if (UD !== this.anyPadConnected) {
          this.anyPadConnected = UD;
          for (const DD of this.connectedListeners) DD()
        }
        const fD = null !== (wD = null === (sD = rD) || void 0 === sD ? void 0 : sD.slot.Qg) && void 0 !== wD ? wD : [],
          ID = cD ? void 0 : gD.find((DD => {
            let {
              rose: zD
            } = DD;
            return zD.some(((DD, zD) => DD && !fD[zD]))
          }));
        if (ID ? (rD = ID.polled, this.setActive(ID.polled.pad)) : this.activeInfo && !rD && this.setActive(null), !rD || !this.activeInfo) return;
        const BD = ((DD, zD) => {
          let {
            pad: wD,
            slot: sD,
            values: KD
          } = DD;
          const rD = (0, pD.r)(zD);
          return rD.values = KD, sD.leftSettled && (rD.leftStick = sD.leftRest.apply(nD(wD, 0))), sD.rightSettled && (rD.rightStick = sD.rightRest.apply(nD(wD, 2))), rD
        })(rD, DD);
        for (const pD of this.frameListeners) pD(BD, zD, this.activeInfo)
      }
      readPad(DD) {
        const zD = this.readSnapshot(DD);
        return zD && (0, fD.f)(zD) ? (DD => {
          const zD = zD => {
              var wD;
              return null !== (wD = DD.buttons[zD]) && void 0 !== wD ? wD : ID(!1)
            },
            wD = zD => {
              var wD;
              return null !== (wD = DD.axes[zD]) && void 0 !== wD ? wD : 0
            },
            pD = DD.axes.length > 9,
            sD = pD ? (DD => {
              const zD = 0 !== DD;
              return {
                up: zD && (DD >= -1 && DD < -.7 || DD >= .95 && DD <= 1),
                right: zD && DD >= -.75 && DD < -.1,
                down: zD && DD >= -.2 && DD < .45,
                left: zD && DD >= .4 && DD <= 1
              }
            })(wD(9)) : {
              up: wD(5) < -.5,
              down: wD(5) > .5,
              left: wD(4) < -.5,
              right: wD(4) > .5
            };
          return {
            ...DD,
            mapping: "standard",
            buttons: [zD(1), zD(2), zD(0), zD(3), zD(4), zD(5), zD(6), zD(7), zD(8), zD(9), zD(10), zD(11), ID(sD.up), ID(sD.down), ID(sD.left), ID(sD.right), zD(12)],
            axes: [wD(0), wD(1), wD(2), wD(pD ? 5 : 3)]
          }
        })(zD) : zD
      }
      readSnapshot(DD) {
        if (this.nativeReader) try {
          return this.nativeReader(DD)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (DD => {
          const zD = DD;
          return {
            index: zD.index,
            id: zD.id,
            connected: zD.connected,
            mapping: zD.mapping,
            buttons: Array.from(zD.buttons, (DD => ({
              pressed: DD.pressed,
              value: DD.value
            }))),
            axes: Array.from(zD.axes),
            vendorName: gD(DD)
          }
        })(DD)
      }
      isUsable(DD) {
        return !(0, UD.f)(DD.id) && ("standard" !== DD.mapping ? (this.warnedNonStandardIds.has(DD.id) || (this.warnedNonStandardIds.add(DD.id), console.warn(`Controller "${DD.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(DD.index))
      }
      setActive(DD) {
        this.activeInfo = DD ? {
          index: DD.index,
          id: DD.id,
          family: (0, sD.c)(DD.id, DD.vendorName)
        } : null;
        for (const zD of this.connectionListeners) zD(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (DD) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", DD)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.DU))
      }
    }((() => AD ? AD.call(navigator) : []), !0);
    MD.listenForConnections()
  },
  8748: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      h: () => rD,
      j: () => LD,
      n: () => sD
    });
    var pD = wD(8756);
    const sD = DD => {
        const zD = [];
        DD.holdingGun && zD.push({
          kind: "reload"
        }), DD.touchscreenActionButton && zD.push({
          kind: "touchButton",
          label: DD.touchscreenActionButton
        });
        for (const KD of null !== (wD = null === (sD = DD.customButtons) || void 0 === sD ? void 0 : sD.filter(pD.g)) && void 0 !== wD ? wD : []) {
          var wD, sD;
          zD.push({
            kind: "customButton",
            id: KD.id,
            icon: KD.icon,
            description: KD.description
          })
        }
        return zD
      },
      KD = DD => DD.length >= 2,
      rD = DD => "specialAction" !== DD.kind,
      LD = (DD, zD) => {
        if (null === DD || null === zD) return DD === zD;
        if (DD.kind !== zD.kind) return !1;
        switch (DD.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return DD.action === zD.action;
          case "customButton":
            return DD.id === zD.id && DD.icon === zD.icon;
          case "touchButton":
            return DD.label === zD.label
        }
      }
  },
  8664: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    const pD = {
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
  8745: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => RD,
      i: () => fD,
      j: () => AD,
      k: () => ID
    });
    var pD = wD(58),
      sD = wD(25),
      KD = wD(1442),
      rD = wD(8748),
      LD = wD(8765);
    let cD = null;
    const gD = () => cD,
      RD = DD => {
        (0, rD.j)(cD, DD) || (cD = DD, sD.l.KG(LD.e, cD))
      },
      AD = () => {
        const [DD, zD] = (0, pD.useState)(gD);
        return (0, KD.g)(LD.e, zD), DD
      };
    let UD = !1;
    const fD = DD => {
        DD !== UD && (UD = DD, sD.l.KG(LD.h, DD))
      },
      ID = () => {
        const [DD, zD] = (0, pD.useState)(UD);
        return (0, KD.g)(LD.h, zD), DD
      }
  },
  8776: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      i: () => LD
    });
    var pD = wD(25),
      sD = wD(8765);
    let KD = !1;
    const rD = () => KD,
      LD = DD => {
        DD !== KD && (KD = DD, pD.l.KG(sD.i, KD))
      }
  },
  8768: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => cD
    });
    var pD = wD(25),
      sD = wD(8765);
    let KD = null,
      rD = 0;
    const LD = () => KD,
      cD = DD => {
        null === DD && null === KD || (KD = null === DD ? null : {
          id: ++rD,
          holdMs: DD
        }, pD.l.KG(sD.j, KD))
      }
  },
  8765: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      e: () => pD,
      h: () => sD,
      i: () => LD,
      j: () => cD,
      m: () => gD,
      q: () => rD
    });
    const pD = "controllerActionHintChanged",
      sD = "controllerActionWheelHintChanged",
      KD = "controllerOpenChat",
      rD = "controllerSneakToggledChanged",
      LD = "controllerAttackLatchedChanged",
      cD = "controllerDropStackHoldChanged",
      gD = "controllerPickBlockHintChanged"
  },
  8779: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      e: () => LD
    });
    var pD = wD(25),
      sD = wD(8765);
    let KD = !1;
    const rD = () => KD,
      LD = DD => {
        DD !== KD && (KD = DD, pD.l.KG(sD.m, KD))
      }
  },
  8833: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      e: () => LD
    });
    var pD = wD(25),
      sD = wD(8765);
    let KD = !1;
    const rD = () => KD,
      LD = DD => {
        DD !== KD && (KD = DD, pD.l.KG(sD.q, KD))
      }
  },
  8717: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      constructor() {
        this.downAtMs = null
      }
      update(DD, zD, wD, pD) {
        if (DD) return this.downAtMs = wD, null;
        if (null === this.downAtMs) return null;
        const sD = wD - this.downAtMs >= pD;
        return zD ? sD ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, sD ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8243: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => AD,
      f: () => UD,
      j: () => LD,
      n: () => MD,
      p: () => nD
    });
    var pD = wD(35),
      sD = wD(8213),
      KD = wD(8184);
    const rD = (() => {
        try {
          return wD(8248)
        } catch {
          return null
        }
      })(),
      LD = [...KD.U, "LeftStick", "RightStick"],
      cD = new Map,
      gD = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      RD = (new Set(Object.values(gD)), {
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
      AD = (DD, zD) => {
        var wD, pD;
        return null !== (wD = null === (pD = RD[gD[DD]]) || void 0 === pD ? void 0 : pD[zD]) && void 0 !== wD ? wD : 1
      },
      UD = (DD, zD) => {
        const wD = `./${gD[DD]}/${zD}.svg`;
        let pD = cD.get(wD);
        return void 0 === pD && (pD = rD ? rD(wD) : "", cD.set(wD, pD)), pD
      },
      fD = new Set,
      ID = [],
      BD = DD => {
        if (!fD.has(DD)) {
          fD.add(DD);
          for (const zD of LD) {
            const wD = UD(DD, zD);
            if (wD) {
              const DD = new Image;
              DD.crossOrigin = "anonymous", DD.src = wD, ID.push(DD)
            }
          }
        }
      },
      GD = "controllerGlyphFamily";
    let hD = null;
    const nD = DD => {
        DD !== hD && (hD = DD, pD.h.setItem(GD, DD), BD(DD))
      },
      MD = () => {
        const DD = pD.h.getItem(GD);
        (0, sD.g)(DD) && DD !== hD && (hD = DD, BD(DD))
      }
  },
  8855: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => ND,
      g: () => ZD
    });
    var pD = wD(58),
      sD = wD(25),
      KD = wD(1442),
      rD = wD(8196),
      LD = wD(8178),
      cD = wD(8226),
      gD = wD(8208);
    const RD = {
        x: 0,
        y: 0,
        z: 0
      },
      AD = Math.PI / 180,
      UD = DD => Math.hypot(DD.x, DD.y, DD.z),
      fD = (DD, zD) => ({
        x: DD.x * zD,
        y: DD.y * zD,
        z: DD.z * zD
      }),
      ID = (DD, zD) => ({
        x: DD.x + zD.x,
        y: DD.y + zD.y,
        z: DD.z + zD.z
      }),
      BD = (DD, zD) => ({
        x: DD.x - zD.x,
        y: DD.y - zD.y,
        z: DD.z - zD.z
      }),
      GD = DD => {
        const zD = UD(DD);
        return 0 === zD ? RD : fD(DD, 1 / zD)
      },
      hD = DD => ({
        min: {
          ...DD
        },
        max: {
          ...DD
        }
      }),
      nD = (DD, zD) => ({
        min: {
          x: Math.min(DD.min.x, zD.x),
          y: Math.min(DD.min.y, zD.y),
          z: Math.min(DD.min.z, zD.z)
        },
        max: {
          x: Math.max(DD.max.x, zD.x),
          y: Math.max(DD.max.y, zD.y),
          z: Math.max(DD.max.z, zD.z)
        }
      }),
      MD = (DD, zD) => DD.max.x - DD.min.x <= zD && DD.max.y - DD.min.y <= zD && DD.max.z - DD.min.z <= zD;
    class OD {
      constructor() {
        this.bias = RD, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = RD, this.windowSec = 0
      }
      update(DD) {
        const zD = this.gyroRange ? nD(this.gyroRange, DD.gyro) : hD(DD.gyro),
          wD = DD.accel ? this.accelRange ? nD(this.accelRange, DD.accel) : hD(DD.accel) : null;
        if (!MD(zD, 1) || wD && !MD(wD, .01)) return void this.restartWindow(DD);
        if (this.gyroRange = zD, this.accelRange = wD, this.sum = ID(this.sum, fD(DD.gyro, DD.dtSec)), this.windowSec += DD.dtSec, this.windowSec < 1) return;
        const pD = fD(this.sum, 1 / this.windowSec);
        if (UD(pD) > 5) return;
        const sD = BD(pD, this.bias);
        let KD = 0;
        !this.calibrated || this.windowSec >= 3 ? KD = 1 : UD(sD) <= 1 && (KD = Math.min(1, DD.dtSec / 1)), this.bias = ID(this.bias, fD(sD, KD)), this.calibrated = this.calibrated || KD > 0
      }
      correct(DD) {
        return BD(DD, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = RD, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = RD, this.windowSec = 0
      }
      restartWindow(DD) {
        this.gyroRange = hD(DD.gyro), this.accelRange = DD.accel ? hD(DD.accel) : null, this.sum = RD, this.windowSec = 0
      }
    }
    class JD {
      constructor() {
        this.down = null
      }
      update(DD, zD, wD) {
        const pD = GD(fD(zD, -1));
        if (!this.down) return this.down = pD, pD;
        const sD = fD(DD, AD * wD),
          KD = this.down,
          rD = {
            x: KD.x - (sD.y * KD.z - sD.z * KD.y),
            y: KD.y - (sD.z * KD.x - sD.x * KD.z),
            z: KD.z - (sD.x * KD.y - sD.y * KD.x)
          },
          LD = 0 === UD(pD) ? 0 : Math.min(1, wD / .25);
        var cD, gD;
        return this.down = GD((gD = LD, ID(cD = rD, fD(BD(pD, cD), gD)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class ED {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(DD, zD, wD) {
        const pD = Math.hypot(DD, zD),
          sD = Math.max(0, Math.min(1, (pD - 2) / 2)),
          KD = {
            yaw: DD * (1 - sD),
            pitch: zD * (1 - sD),
            dtSec: wD
          };
        for (this.entries.push(KD), this.windowSec += wD; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let rD = 0,
          LD = 0;
        for (const gD of this.entries) rD += gD.yaw * gD.dtSec, LD += gD.pitch * gD.dtSec;
        const cD = this.windowSec > 0 ? {
          yaw: rD / this.windowSec,
          pitch: LD / this.windowSec
        } : {
          yaw: KD.yaw,
          pitch: KD.pitch
        };
        return {
          yaw: DD * sD + cD.yaw,
          pitch: zD * sD + cD.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class QD {
      constructor() {
        this.calibrator = new OD, this.gravity = new JD, this.smoother = new ED
      }
      process(DD, zD, wD) {
        const pD = Math.max(0, Math.min(.05, zD));
        this.calibrator.update({
          ...DD,
          dtSec: pD
        });
        const sD = this.calibrator.correct(DD.gyro);
        let KD = sD.y;
        "player" === wD && DD.accel && (KD = ((DD, zD) => {
          const wD = DD.y * zD.y + DD.z * zD.z;
          return -Math.sign(wD) * Math.min(1.41 * Math.abs(wD), Math.hypot(DD.y, DD.z))
        })(sD, this.gravity.update(sD, DD.accel, pD)));
        const rD = this.smoother.apply(KD, sD.x, pD),
          LD = ((DD, zD) => {
            const wD = Math.hypot(DD, zD);
            if (wD >= 1) return {
              yaw: DD,
              pitch: zD
            };
            const pD = wD / 1;
            return {
              yaw: DD * pD,
              pitch: zD * pD
            }
          })(rD.yaw, rD.pitch);
        return {
          yawDeg: LD.yaw * pD,
          pitchDeg: LD.pitch * pD
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
    const XD = (DD, zD) => {
      var wD, pD, sD;
      const KD = zD * AD,
        rD = null !== (wD = DD.beta) && void 0 !== wD ? wD : 0,
        LD = null !== (pD = DD.gamma) && void 0 !== pD ? pD : 0;
      return {
        x: rD * Math.cos(KD) - LD * Math.sin(KD),
        y: rD * Math.sin(KD) + LD * Math.cos(KD),
        z: null !== (sD = DD.alpha) && void 0 !== sD ? sD : 0
      }
    };
    var VD = wD(8859);
    class PD {
      constructor(DD, zD, wD) {
        this.hid = DD, this.sink = zD, this.onControllersChanged = wD, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = DD => {
          this.openController(DD.device).catch((DD => {
            console.warn("Could not open motion controller", DD)
          }))
        }, this.onDisconnect = DD => {
          this.opening.has(DD.device) && this.disconnectedWhileOpening.add(DD.device);
          const zD = this.controllers.get(DD.device);
          zD && (this.forget(zD), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const DD = await this.hid.getDevices();
        for (const zD of DD) await this.openController(zD).catch((DD => {
          console.warn("Could not open motion controller", DD)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const DD of [...this.controllers.values()]) this.forget(DD);
        this.onControllersChanged()
      }
      async request() {
        const DD = await this.hid.requestDevice({
          filters: VD.i
        });
        let zD = 0;
        for (const wD of DD) await this.openController(wD).catch((DD => {
          console.warn("Could not open motion controller", DD), zD++
        }));
        return zD
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((DD => null !== (0, VD.e)(DD.vendorId, DD.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((DD => DD.kind))
      }
      forget(DD) {
        DD.device.removeEventListener("inputreport", DD.onReport), this.controllers.get(DD.device) === DD && this.controllers.delete(DD.device)
      }
      async openController(DD) {
        const zD = (0, VD.e)(DD.vendorId, DD.productId);
        if (!zD || !this.running || this.controllers.has(DD) || this.opening.has(DD)) return;
        this.opening.add(DD);
        let wD = !1;
        try {
          DD.opened || await DD.open()
        } finally {
          this.opening.delete(DD), wD = this.disconnectedWhileOpening.delete(DD)
        }
        if (wD) return void DD.close().catch((DD => {
          console.debug("Could not close an unplugged motion controller", DD)
        }));
        if (!this.running) return;
        const pD = {
          device: DD,
          kind: zD,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: DD => {
            this.onReport(pD, DD)
          }
        };
        this.controllers.set(DD, pD), DD.addEventListener("inputreport", pD.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(pD)
        } catch (sD) {
          console.warn(`Could not turn on motion for ${zD}`, sD), this.controllers.get(DD) === pD && (this.forget(pD), this.onControllersChanged())
        }
      }
      async enableMotion(DD) {
        let {
          device: zD,
          kind: wD
        } = DD;
        if ((0, VD.f)(wD))
          for (const pD of VD.s[wD]) await zD.receiveFeatureReport(pD).catch((DD => {
            console.debug(`Motion controller feature report ${pD} unavailable`, DD)
          }));
        else
          for (let pD = 0; pD < 2; pD++)
            for (const {
                subcommand: DD,
                args: wD
              }
              of VD.v) await zD.sendReport(VD.z, (0, VD.b)(this.switchPacketCounter++, DD, wD)), await new Promise((DD => {
              setTimeout(DD, 60)
            }))
      }
      onReport(DD, zD) {
        const wD = (0, VD.o)(DD.kind, zD.reportId, zD.data, DD.device.productId);
        if (!wD) return;
        const pD = null === DD.lastEventMs ? 0 : (zD.timeStamp - DD.lastEventMs) / 1e3;
        DD.lastEventMs = zD.timeStamp;
        let sD = wD.dtSec;
        if (null !== sD && pD > 0 && (sD = Math.max(.001, Math.min(.017, pD / wD.readings.length))), null === sD && null !== wD.sensorClock && (0, VD.f)(DD.kind)) {
          const zD = (0, VD.q)(DD.kind, DD.lastClock, wD.sensorClock);
          DD.lastClock = wD.sensorClock, sD = 0 === zD ? null : zD
        }
        if (DD.lastReadingMs = zD.timeStamp, this.isPreferred(DD, zD.timeStamp))
          for (const rD of wD.readings) {
            var KD;
            this.sink(rD, null !== (KD = sD) && void 0 !== KD ? KD : pD, `hid${DD.openedOrder}`)
          }
      }
      isPreferred(DD, zD) {
        const wD = DD => 1e6 * VD.k[DD.kind] + DD.openedOrder;
        for (const pD of this.controllers.values())
          if (pD !== DD && zD - pD.lastReadingMs < 500 && wD(pD) < wD(DD)) return !1;
        return !0
      }
    }
    var CD = wD(103);
    const xD = () => DeviceMotionEvent,
      TD = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, CD.isMobile)(),
      bD = () => {
        var DD;
        const zD = null === (DD = window.screen.orientation) || void 0 === DD ? void 0 : DD.angle;
        return "number" === typeof zD ? zD : "number" === typeof window.orientation ? window.orientation : 0
      };
    class jD {
      constructor(DD, zD) {
        this.sink = DD, this.onStateChanged = zD, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((DD => {
            console.warn("Could not enable the motion sensor", DD)
          }))
        }, this.onMotion = DD => {
          const zD = DD.rotationRate;
          if (!zD || null === zD.alpha && null === zD.beta && null === zD.gamma) return;
          const wD = null === this.lastEventMs ? 0 : (DD.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = DD.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: XD(zD, bD()),
            accel: null
          }, wD, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof xD().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const DD = xD().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof DD) return void this.listen();
        let zD;
        this.disarmGestureRequest();
        try {
          zD = await DD.call(DeviceMotionEvent)
        } catch (wD) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), wD
        }
        this.wanted && ("granted" === zD ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(DD) {
        this.state !== DD && (this.state = DD, this.onStateChanged())
      }
    }
    const dD = "controllerGyroStatusChanged",
      SD = {
        aT: 0,
        qT: 0
      },
      iD = DD => {
        var zD, wD;
        return "undefined" === typeof document || (null === (zD = null === (wD = document.featurePolicy) || void 0 === wD ? void 0 : wD.allowsFeature(DD)) || void 0 === zD || zD)
      };
    class lD {
      constructor() {
        this.processor = new QD, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = DD => {
          const zD = DD.gyroAiming && LD.g.hasConnectedPad();
          var wD, pD;
          zD !== this.phoneRunning && (this.phoneRunning = zD, zD ? null === (wD = this.phone) || void 0 === wD || wD.start() : null === (pD = this.phone) || void 0 === pD || pD.stop());
          if (DD.gyroAiming !== this.running) {
            var sD, KD;
            if (this.running = DD.gyroAiming, this.running) null === (sD = this.hid) || void 0 === sD || sD.start().catch((DD => {
              console.warn("Could not open motion controllers", DD)
            }));
            else null === (KD = this.hid) || void 0 === KD || KD.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          sD.l.KG(dD, this.getStatus())
        };
        const DD = (() => {
            var DD;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (DD = navigator.hid) && void 0 !== DD ? DD : null
          })(),
          zD = iD("hid");
        this.hidBlocked = null !== DD && !zD, this.hid = DD && zD ? new PD(DD, ((DD, zD, wD) => {
          this.lastHidReadingMs = performance.now(), this.feed(DD, zD, "player", wD)
        }), this.publishStatus) : null;
        const wD = iD("accelerometer") && iD("gyroscope");
        this.phoneBlocked = TD() && !wD, this.phone = TD() && wD ? new jD(((DD, zD, wD) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(DD, zD, "local", wD)
        }), this.publishStatus) : null, sD.l.subscribe(gD.d, this.syncWithSettings), LD.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, gD.g)()), this.publishStatus()
        })), this.syncWithSettings((0, gD.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var DD, zD, wD, pD;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (DD = null === (zD = this.hid) || void 0 === zD ? void 0 : zD.getConnectedKinds()) && void 0 !== DD ? DD : [],
          phoneMotion: null !== (wD = null === (pD = this.phone) || void 0 === pD ? void 0 : pD.getState()) && void 0 !== wD ? wD : "off",
          padConnected: LD.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var DD;
        await (null === (DD = this.phone) || void 0 === DD ? void 0 : DD.requestPermission())
      }
      drainLookDelta() {
        const DD = performance.now();
        DD - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = DD;
        const zD = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const wD = (0, gD.g)();
        return wD.gyroAiming && (DD => {
          let {
            activation: zD,
            isHeld: wD,
            useButton: pD,
            gyroButton: sD
          } = DD;
          return "always" === zD || wD("aiming" === zD ? pD : sD)
        })({
          activation: wD.gyroActivation,
          isHeld: DD => cD.e.isButtonHeld(DD),
          useButton: (0, rD.g)("use"),
          gyroButton: wD.gyroButton
        }) ? ((DD, zD) => ({
          aT: -DD.yawDeg * zD * AD,
          qT: -DD.pitchDeg * zD * AD
        }))(zD, wD.gyroSensitivity) : SD
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(DD, zD) {
        this.feed(DD, zD, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(DD, zD, wD, pD) {
        this.source !== pD && (this.processor.reset(), this.source = pD);
        const sD = this.processor.process(DD, zD, wD);
        this.pendingYawDeg += sD.yawDeg, this.pendingPitchDeg += sD.pitchDeg
      }
    }
    let WD = null;
    const ND = () => (WD || (WD = new lD), WD),
      ZD = () => {
        const [DD, zD] = (0, pD.useState)((() => ND().getStatus()));
        return (0, KD.g)(dD, zD), (0, pD.useEffect)((() => {
          zD(ND().getStatus())
        }), []), DD
      }
  },
  8859: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => JD,
      e: () => cD,
      f: () => pD,
      i: () => LD,
      j: () => gD,
      k: () => RD,
      o: () => nD,
      q: () => GD,
      s: () => QD,
      v: () => ED,
      z: () => MD
    });
    const pD = DD => "dualShock4" === DD || "dualSense" === DD,
      sD = 1356,
      KD = 1406,
      rD = [{
        vendorId: sD,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: sD,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: sD,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: sD,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: sD,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: KD,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: KD,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: KD,
        productId: 8199,
        kind: "joyConRight"
      }],
      LD = rD.map((DD => {
        let {
          vendorId: zD,
          productId: wD
        } = DD;
        return {
          vendorId: zD,
          productId: wD
        }
      })),
      cD = (DD, zD) => {
        var wD, pD;
        return null !== (wD = null === (pD = rD.find((wD => wD.vendorId === DD && wD.productId === zD))) || void 0 === pD ? void 0 : pD.kind) && void 0 !== wD ? wD : null
      },
      gD = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      RD = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      AD = 2e3 / 32767,
      UD = 1 / 8192,
      fD = 936 / 13371,
      ID = (DD, zD, wD) => ({
        x: DD.getInt16(zD, !0) * wD,
        y: DD.getInt16(zD + 2, !0) * wD,
        z: DD.getInt16(zD + 4, !0) * wD
      }),
      BD = DD => 0 === DD.x && 0 === DD.y && 0 === DD.z,
      GD = (DD, zD, wD) => null === zD ? null : "dualShock4" === DD ? 16 * (wD - zD & 65535) / 3 / 1e6 : (wD - zD >>> 0) / 3 / 1e6,
      hD = (DD, zD) => "joyConRight" === zD ? {
        x: DD.y,
        y: -DD.z,
        z: -DD.x
      } : {
        x: -DD.y,
        y: DD.z,
        z: -DD.x
      },
      nD = (DD, zD, wD, sD) => pD(DD) ? ((DD, zD, wD, pD) => {
        const sD = ((DD, zD, wD) => "dualShock4" === DD ? 1 === zD && wD >= 63 ? 0 : 17 === zD && wD >= 65 ? 2 : null : 1 === zD && wD >= 62 ? 0 : 49 === zD && wD >= 63 ? 1 : null)(DD, zD, wD.byteLength);
        if (null === sD) return null;
        if (2976 === pD && 1 === zD && 0 !== (4 & wD.getUint8(30))) return null;
        const KD = sD + ("dualShock4" === DD ? 12 : 15),
          rD = ID(wD, KD, AD),
          LD = ID(wD, KD + 6, UD);
        return BD(rD) && BD(LD) ? null : {
          readings: [{
            gyro: rD,
            accel: LD
          }],
          dtSec: null,
          sensorClock: "dualShock4" === DD ? wD.getUint16(sD + 9, !0) : wD.getUint32(sD + 27, !0)
        }
      })(DD, zD, wD, sD) : ((DD, zD, wD) => {
        if (48 !== zD && 49 !== zD || wD.byteLength < 48) return null;
        const pD = [];
        for (let sD = 0; sD < 3; sD++) {
          const zD = ID(wD, 12 + 12 * sD, 244e-6),
            KD = ID(wD, 18 + 12 * sD, fD);
          if (BD(KD) && BD(zD)) return null;
          pD.push({
            gyro: hD(KD, DD),
            accel: hD(zD, DD)
          })
        }
        return {
          readings: pD,
          dtSec: .005,
          sensorClock: null
        }
      })(DD, zD, wD),
      MD = 1,
      OD = [0, 1, 64, 64, 0, 1, 64, 64],
      JD = (DD, zD, wD) => new Uint8Array([15 & DD, ...OD, zD, ...wD]),
      ED = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      QD = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8230: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => xD,
      h: () => lD,
      l: () => hD,
      o: () => fD.f,
      s: () => jD,
      u: () => bD,
      y: () => nD,
      z: () => dD,
      A: () => fD.n,
      D: () => fD.o,
      G: () => WD,
      J: () => fD.s,
      K: () => XD
    });
    var pD = wD(58),
      sD = wD(20),
      KD = wD(25),
      rD = wD(1442),
      LD = wD(1299),
      cD = wD(8208),
      gD = wD(8237),
      RD = wD(8189),
      AD = wD(8178),
      UD = wD(8243),
      fD = wD(1383),
      ID = wD(8184),
      BD = wD(8655),
      GD = wD(4407);
    const hD = DD => !DD.repeat && !(0, BD.c)(DD.key),
      nD = "PadHidesCursor";
    let MD = !1;
    const OD = DD => {
        DD !== MD && (MD = DD, document.documentElement.classList.toggle(nD, DD))
      },
      JD = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(DD) {
          let zD = !1,
            wD = !1;
          DD.values.forEach(((DD, pD) => {
            const sD = DD >= (this.buttonsDown[pD] ? ID.O : ID.M);
            sD && !this.buttonsDown[pD] && (zD = !0, wD = !0), this.buttonsDown[pD] = sD
          }));
          return [DD.leftStick, DD.rightStick].forEach(((DD, pD) => {
            const sD = this.stickAnchors[pD];
            Math.hypot(DD.x, DD.y) < (sD ? ID.O : .3) ? this.stickAnchors[pD] = null : (!sD || Math.hypot(DD.x - sD.x, DD.y - sD.y) >= .3) && (this.stickAnchors[pD] = {
              x: DD.x,
              y: DD.y
            }, zD = !0, wD ||= !sD)
          })), zD && (this.lastActivityMs = DD.timestampMs), this.onlyMovedOn = zD && !wD, zD
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(DD) {
          return !(DD - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((DD => DD)) || this.stickAnchors.some((DD => null !== DD)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((DD => null !== DD))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let ED = null,
      QD = !1;
    const XD = () => QD;
    let VD = null,
      PD = !1,
      CD = null;
    const xD = () => CD;
    let TD = !1;
    const bD = DD => {
        if (!JD.observe(DD)) return !1;
        if (TD && JD.wasOnlyMoveOn() && !(0, fD.f)()) return !1;
        TD = !1, QD = !1;
        const zD = !(0, fD.f)();
        return zD && (ED = DD, CD = !MD && PD && VD ? {
          ...VD
        } : null), PD = !1, (0, fD.n)("gamepad"), OD(!0), (0, UD.p)((0, cD.j)()), zD
      },
      jD = DD => !(0, fD.f)() || DD === ED,
      dD = () => {
        JD.reset()
      },
      SD = () => {
        const DD = sD.e.get("activeInputDevice"),
          zD = "gamepad" === DD ? AD.g.getActivePad() : null;
        return {
          device: DD,
          inGame: (0, LD.s)(),
          padMovesMouse: null !== zD && (0, RD.e)(zD.id)
        }
      },
      iD = DD => {
        document.pointerLockElement ? VD = null : (VD ??= {
          x: 0,
          y: 0
        }, VD.x = DD.clientX, VD.y = DD.clientY)
      },
      lD = () => {
        const DD = new GD.b,
          zD = zD => {
            DD.reset(), TD = !1, (0, fD.n)(zD)
          },
          wD = DD => {
            if (DD.isTrusted) {
              if (DD instanceof KeyboardEvent) {
                if ((0, fD.k)(DD), !hD(DD)) return;
                QD = !0
              }
              if (DD instanceof PointerEvent && "touch" === DD.pointerType) return VD = null, void zD("touch");
              DD instanceof PointerEvent && (iD(DD), PD = !0), ("pointerdown" !== DD.type || (DD => {
                let {
                  device: zD,
                  inGame: wD,
                  padMovesMouse: pD
                } = DD;
                return !("gamepad" === zD && pD && wD)
              })(SD())) && zD("keyboardMouse")
            }
          },
          pD = DD => {
            DD.isTrusted && (VD = null, zD("touch"))
          },
          rD = DD => {
            DD.isTrusted && "touch" !== DD.pointerType && !DD.relatedTarget && (VD = null)
          },
          LD = wD => {
            if (!wD.isTrusted || "touch" === wD.pointerType) return;
            iD(wD);
            const pD = wD.movementX || 0,
              KD = wD.movementY || 0;
            if (0 === pD && 0 === KD) return;
            if (PD = !0, OD(!1), "keyboardMouse" === sD.e.get("activeInputDevice")) return;
            const rD = JD.isHolding(wD.timeStamp),
              LD = SD(),
              cD = (DD => {
                let {
                  device: zD,
                  inGame: wD,
                  padMovesMouse: pD,
                  padHolding: sD
                } = DD;
                return ("gamepad" !== zD || !pD) && "keyboardMouse" !== zD && (wD || !sD)
              })({
                ...LD,
                inGame: LD.inGame && (0, gD.f)(),
                padHolding: rD
              });
            cD && DD.add(pD, KD, wD.timeStamp) && (zD("keyboardMouse"), TD = JD.isStickOffRest())
          },
          cD = DD => {
            OD("gamepad" === DD)
          },
          RD = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", wD, RD), window.addEventListener("pointerdown", wD, RD), window.addEventListener("wheel", wD, RD), window.addEventListener("touchstart", pD, RD), window.addEventListener("pointermove", LD, RD), window.addEventListener("pointerout", rD, RD);
        const AD = KD.l.subscribe("appManagerUpdated|activeInputDevice", cD);
        return cD(sD.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", wD, RD), window.removeEventListener("pointerdown", wD, RD), window.removeEventListener("wheel", wD, RD), window.removeEventListener("touchstart", pD, RD), window.removeEventListener("pointermove", LD, RD), window.removeEventListener("pointerout", rD, RD), VD = null, KD.l.unsubscribe(AD), OD(!1)
        }
      },
      WD = () => {
        const [DD, zD] = (0, pD.useState)(cD.j);
        return (0, rD.g)(cD.c, (() => {
          zD((0, cD.j)())
        })), (0, rD.g)(AD.d, (() => {
          zD((0, cD.j)())
        })), DD
      }
  },
  8213: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      g: () => sD
    });
    const pD = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      sD = DD => pD.includes(DD)
  },
  8705: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      f: () => KD,
      h: () => cD,
      i: () => LD
    });
    var pD = wD(1442),
      sD = wD(1394);
    const KD = "controllerInventoryCursorChanged",
      rD = {
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
      LD = () => {
        var DD, zD;
        return (0, pD.k)(KD, null !== (DD = null === (zD = (0, sD.g)()) || void 0 === zD ? void 0 : zD.getInventoryCursorState()) && void 0 !== DD ? DD : rD)
      },
      cD = () => {
        var DD, zD;
        return null !== (DD = null === (zD = (0, sD.g)()) || void 0 === zD ? void 0 : zD.isPadSteppingSlots()) && void 0 !== DD && DD
      }
  },
  8700: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => UD,
      c: () => LD,
      e: () => cD,
      h: () => rD,
      j: () => KD,
      n: () => RD,
      o: () => AD
    });
    let pD = null;
    const sD = new Set,
      KD = DD => (pD = DD, () => {
        if (pD === DD) {
          pD = null;
          for (const DD of sD) DD()
        }
      }),
      rD = DD => (sD.add(DD), () => {
        sD.delete(DD)
      }),
      LD = () => pD,
      cD = () => null !== pD;
    let gD = null;
    const RD = DD => {
        gD = DD
      },
      AD = () => {
        const DD = gD;
        return gD = null, DD
      },
      UD = (DD, zD) => {
        var wD, pD;
        return null !== (wD = null !== (pD = DD.find((DD => DD.element === zD))) && void 0 !== pD ? pD : DD.find((DD => DD.element.contains(zD)))) && void 0 !== wD ? wD : null
      }
  },
  8707: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      e: () => rD
    });
    var pD = wD(58);
    const sD = new WeakMap,
      KD = DD => {
        var zD, wD;
        return null !== (zD = null === (wD = sD.get(DD)) || void 0 === wD ? void 0 : wD.current) && void 0 !== zD ? zD : null
      },
      rD = (DD, zD) => {
        const wD = (0, pD.useRef)(zD);
        wD.current = zD;
        const KD = (0, pD.useRef)(null);
        (0, pD.useEffect)((() => {
          const zD = DD.current,
            pD = KD.current;
          zD !== pD && (pD && sD.get(pD) === wD && sD.delete(pD), KD.current = zD, zD && sD.set(zD, wD))
        })), (0, pD.useEffect)((() => () => {
          const DD = KD.current;
          DD && sD.get(DD) === wD && sD.delete(DD), KD.current = null
        }), [])
      }
  },
  8830: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      f: () => gD,
      h: () => AD,
      l: () => RD,
      n: () => cD,
      q: () => fD
    });
    var pD = wD(25),
      sD = wD(2e3),
      KD = wD(1394),
      rD = wD(1383);
    const LD = DD => {
        var zD, wD;
        return (0, rD.f)() && null !== (zD = null === (wD = (0, KD.g)()) || void 0 === wD ? void 0 : wD.getGlyphForNoaAction(DD)) && void 0 !== zD ? zD : null
      },
      cD = "controllerGlyph:",
      gD = DD => {
        var zD, wD;
        return null !== (zD = null === (wD = (0, KD.g)()) || void 0 === wD ? void 0 : wD.getPadGlyphIconName(DD)) && void 0 !== zD ? zD : `${cD}xbox/${DD}`
      },
      RD = DD => DD.startsWith(cD),
      AD = DD => {
        var zD, wD;
        return RD(DD) && null !== (zD = null === (wD = (0, KD.g)()) || void 0 === wD ? void 0 : wD.getPadGlyphIconUrl(DD)) && void 0 !== zD ? zD : null
      },
      UD = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", rD.c, sD.f, sD.c],
      fD = DD => {
        const zD = UD.map((zD => pD.l.subscribe(zD, DD)));
        return () => {
          for (const DD of zD) pD.l.unsubscribe(DD)
        }
      }
  },
  8237: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      f: () => RD,
      h: () => cD,
      j: () => LD
    });
    var pD = wD(20),
      sD = wD(1648),
      KD = wD(1745);
    const rD = new Map,
      LD = (DD, zD) => (rD.has(DD) && console.warn(`Gameplay blocker "${DD}" registered twice; the newer one replaces it.`), rD.set(DD, zD), () => {
        rD.get(DD) === zD && rD.delete(DD)
      }),
      cD = () => (0, KD.c)(document.activeElement),
      gD = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [zD, wD] of rD)
          if (!DD.includes(zD) && wD()) return zD;
        return null
      },
      RD = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === pD.e.get("gameState") && (!(0, sD.q)() && (!cD() && null === gD(DD)))
      }
  },
  8184: (DD, zD, wD) => {
    wD.d(zD, {
      B: () => OD,
      D: () => hD,
      F: () => GD,
      I: () => gD,
      M: () => UD,
      O: () => fD,
      R: () => sD,
      U: () => pD,
      W: () => ED,
      X: () => CD,
      Y: () => bD,
      ab: () => JD,
      e: () => jD,
      f: () => xD,
      g: () => RD,
      i: () => cD,
      m: () => LD,
      o: () => XD,
      p: () => nD,
      q: () => QD,
      r: () => KD,
      s: () => AD,
      w: () => MD,
      z: () => TD
    });
    const pD = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      sD = pD.length,
      KD = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(sD).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: DD
        }
      },
      rD = Object.fromEntries(pD.map(((DD, zD) => [DD, zD]))),
      LD = DD => rD[DD],
      cD = function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const pD = Math.hypot(DD.x, DD.y);
        if (pD <= zD) return {
          x: 0,
          y: 0
        };
        const sD = Math.min(1, (pD - zD) / Math.max(1e-4, wD - zD));
        return {
          x: DD.x / pD * sD,
          y: DD.y / pD * sD
        }
      },
      gD = ["exponential", "linear", "boost"],
      RD = (DD, zD) => {
        const wD = Math.hypot(DD.x, DD.y);
        if (0 === wD) return {
          x: 0,
          y: 0
        };
        const pD = ((DD, zD) => {
          const wD = Math.max(0, Math.min(1, DD));
          return "linear" === zD ? wD : wD * wD
        })(wD, zD);
        return {
          x: DD.x / wD * pD,
          y: DD.y / wD * pD
        }
      },
      AD = .5,
      UD = .3,
      fD = .2,
      ID = LD("LT"),
      BD = LD("RT"),
      GD = DD => DD === ID || DD === BD,
      hD = (DD, zD) => {
        const wD = LD(zD);
        return GD(wD) ? DD[wD] > .35 : DD[wD] >= AD
      },
      nD = (DD, zD) => DD.map(((DD, wD) => GD(wD) ? zD[wD] ? DD > .35 : DD >= .55 : DD >= AD)),
      MD = ["Up", "Down", "Left", "Right"],
      OD = DD => MD.includes(DD),
      JD = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(DD.x, DD.y) < zD ? null : Math.abs(DD.x) > Math.abs(DD.y) ? DD.x > 0 ? "Right" : "Left" : DD.y > 0 ? "Down" : "Up"
      },
      ED = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      QD = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      XD = ["default", "slow", "off"],
      VD = 800,
      PD = 250,
      CD = (DD, zD) => "off" === zD ? null : "slow" === zD ? {
        initialDelayMs: Math.max(DD.initialDelayMs, VD),
        intervalMs: Math.max(DD.intervalMs, PD)
      } : DD;
    class xD {
      constructor(DD) {
        this.readTiming = DD, this.Qg = !1, this.timing = null, this.nextFireMs = 0
      }
      update(DD, zD) {
        return DD ? this.Qg ? !!(this.timing && zD >= this.nextFireMs) && (this.nextFireMs = zD + this.timing.intervalMs, !0) : (this.Qg = !0, this.timing = this.readTiming(), this.nextFireMs = zD + (null !== (wD = null === (pD = this.timing) || void 0 === pD ? void 0 : pD.initialDelayMs) && void 0 !== wD ? wD : 0), !0) : (this.Qg = !1, !1);
        var wD, pD
      }
      reset() {
        this.Qg = !1
      }
    }
    const TD = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      bD = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class jD {
      constructor(DD) {
        this.timer = DD, this.direction = null
      }
      update(DD, zD) {
        return DD !== this.direction && (this.timer.reset(), this.direction = DD), this.timer.update(null !== DD, zD) ? DD : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8713: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      f: () => KD
    });
    let pD = -1 / 0;
    const sD = () => {
        pD = performance.now()
      },
      KD = DD => performance.now() - pD < DD
  },
  8658: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      d: () => KD
    });
    var pD = wD(8208),
      sD = wD(8184);
    const KD = DD => (0, sD.X)(DD, (0, pD.g)().buttonRepeat),
      rD = DD => new sD.f((() => KD(DD)))
  },
  8223: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      e: () => KD,
      h: () => LD
    });
    var pD = wD(25),
      sD = wD(8208);
    const KD = (DD, zD) => "OpenShop" === DD ? "shop" === zD : "OpenLobbyLeaderboard" !== DD || "leaderboard" === zD;
    let rD = !1;
    const LD = DD => {
        DD !== rD && (rD = DD, pD.l.KG(sD.c, (0, sD.g)()))
      },
      cD = () => ((DD, zD) => "shop" === DD && zD ? "shop" : "leaderboard")((0, sD.g)().leaderboardButton, rD)
  },
  8218: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => RD,
      D: () => cD,
      E: () => LD,
      I: () => JD,
      L: () => UD,
      P: () => fD,
      S: () => AD,
      V: () => OD,
      Y: () => gD,
      ab: () => hD,
      cb: () => PD,
      db: () => MD,
      e: () => SD,
      eb: () => BD,
      g: () => lD,
      hb: () => GD,
      ib: () => ID,
      j: () => CD,
      lb: () => nD,
      m: () => rD,
      nb: () => bD,
      ob: () => KD,
      p: () => VD,
      pb: () => ED,
      q: () => QD,
      rb: () => iD,
      t: () => jD,
      ub: () => XD,
      x: () => dD
    });
    var pD = wD(8201),
      sD = wD(8184);
    const KD = {
        min: 25,
        max: 500,
        step: 5
      },
      rD = {
        min: 25,
        max: 100,
        step: 5
      },
      LD = {
        min: 0,
        max: .4,
        step: .01
      },
      cD = {
        min: 25,
        max: 300,
        step: 5
      },
      gD = {
        min: .5,
        max: 6,
        step: .1
      },
      RD = (DD, zD) => {
        if (!Number.isFinite(DD)) return zD.min;
        const wD = zD.min + Math.round((DD - zD.min) / zD.step) * zD.step,
          pD = Math.min(zD.max, Math.max(zD.min, wD));
        return Math.round(1e3 * pD) / 1e3
      },
      AD = DD => `${Math.round(DD)}%`,
      UD = DD => AD(100 * DD),
      fD = DD => `${DD.toFixed(1)}\xd7`,
      ID = [{
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
      BD = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      GD = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      hD = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      nD = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      MD = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      OD = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      JD = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      ED = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      QD = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      XD = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      VD = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      PD = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      CD = {
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
      xD = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      TD = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      bD = pD.b.map((DD => {
        let {
          group: zD,
          actions: wD
        } = DD;
        const pD = wD.map((DD => ({
          kind: "action",
          action: DD
        })));
        return {
          titleKey: xD[zD],
          rows: "gameplay" === zD ? [...TD, ...pD] : pD
        }
      })),
      jD = sD.U.filter((DD => "Home" !== DD)),
      dD = 1e4;
    class SD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = DD, this.openButton = zD, this.accepts = wD, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(DD, zD) {
        var wD;
        this.updateIgnored(DD, zD);
        const pD = zD - (null !== (wD = this.startMs) && void 0 !== wD ? wD : zD) >= 250;
        for (const sD of jD)
          if (sD !== this.cancelButton && pD && !this.ignoredUntilMs.has(sD) && DD.wasPressed(sD) && this.accepts(sD)) return {
            kind: "bind",
            button: sD
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (DD.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = zD
        }
        return null === this.cancelDownAtMs ? null : DD.isHeld(this.cancelButton) && zD - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : DD.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(DD) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (DD - this.cancelDownAtMs) / 700)
      }
      updateIgnored(DD, zD) {
        if (null === this.startMs) {
          this.startMs = zD;
          for (const zD of jD) DD.isDown(zD) && this.ignoredUntilMs.set(zD, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, zD + 250)
        }
        for (const [wD, pD] of this.ignoredUntilMs) {
          const sD = DD.isDown(wD);
          pD === 1 / 0 ? sD || wD !== this.openButton ? sD || this.ignoredUntilMs.delete(wD) : this.ignoredUntilMs.set(wD, zD + 250) : zD >= pD ? this.ignoredUntilMs.delete(wD) : sD && this.ignoredUntilMs.set(wD, 1 / 0)
        }
      }
    }
    const iD = 6e3;
    class lD {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(DD, zD) {
        let {
          pressed: wD,
          Qg: pD
        } = DD;
        if (wD) {
          const DD = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== DD && zD - DD < 1500 ? [...this.pressesAtMs, zD] : [zD], this.pressesAtMs.length >= 3) return 1
        }
        return pD ? (this.downAtMs ??= zD, Math.min(1, (zD - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8726: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    let pD = null;
    const sD = function(DD) {
        const zD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pD = zD, () => {
          pD === zD && (pD = null)
        }
      },
      KD = () => {
        var DD;
        return null !== (DD = pD) && void 0 !== DD && DD.canCycle() ? pD.cycle : null
      }
  },
  5057: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => rD
    });
    var pD = wD(58);
    const sD = new WeakMap,
      KD = DD => {
        var zD;
        const wD = DD.closest("[data-pad-slider]");
        return wD && null !== (zD = sD.get(wD)) && void 0 !== zD ? zD : null
      },
      rD = (DD, zD) => {
        const wD = (0, pD.useRef)(zD);
        wD.current = zD, (0, pD.useEffect)((() => {
          if (DD.current) return ((DD, zD) => (sD.set(DD, zD), () => {
            sD.get(DD) === zD && sD.delete(DD)
          }))(DD.current, {
            adjust: DD => {
              wD.current.adjust(DD)
            },
            setFraction: DD => {
              wD.current.setFraction(DD)
            },
            endDrag: () => {
              wD.current.endDrag()
            }
          })
        }), [DD])
      }
  },
  8824: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      f: () => rD,
      i: () => KD,
      k: () => pD,
      o: () => LD,
      p: () => gD,
      q: () => RD
    });
    const pD = "controllerActionWheelOpen",
      sD = "controllerActionWheelAim",
      KD = "controllerActionWheelCommit",
      rD = "controllerActionWheelClose",
      LD = "controllerActionWheelPick";
    let cD = !1;
    const gD = () => cD,
      RD = DD => {
        cD = DD
      }
  },
  8816: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      f: () => sD
    });
    let pD = 0;
    const sD = () => {
        pD++
      },
      KD = () => pD
  },
  8723: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      g: () => sD,
      h: () => rD,
      i: () => KD,
      k: () => pD,
      l: () => gD
    });
    const pD = "controllerQuickChatWheelOpen",
      sD = "controllerQuickChatWheelAim",
      KD = "controllerQuickChatWheelCommit",
      rD = "controllerQuickChatWheelClose";
    let LD = !1;
    const cD = () => LD,
      gD = DD => {
        LD = DD
      }
  },
  8740: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    var pD = wD(25);
    const sD = "localBlockBroken";

    function KD() {
      return {
        onPlayerChangeBlock(DD, zD, wD, KD, rD, LD) {
          "Air" === LD && pD.l.KG(sD)
        }
      }
    }
  },
  8732: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(1265);

    function sD(DD, zD) {
      var wD, sD;
      try {
        const wD = (0, pD.d)();
        if ("function" === typeof wD) {
          const pD = new wD(DD, zD);
          if (pD.type === DD) return pD
        }
      } catch {}
      const KD = document.createEvent("Event");
      return KD.initEvent(DD, null !== (wD = null === zD || void 0 === zD ? void 0 : zD.bubbles) && void 0 !== wD && wD, null !== (sD = null === zD || void 0 === zD ? void 0 : zD.cancelable) && void 0 !== sD && sD), KD
    }
  },
  8785: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(8792),
      sD = wD(619),
      KD = wD(128);

    function rD(DD) {
      var zD, wD;
      if ((0, sD.B)(DD)) return !0;
      const rD = null !== (zD = null === (wD = KD.n[KD.v]) || void 0 === wD ? void 0 : wD.adConfig.showRewardedAds) && void 0 !== zD && zD;
      for (const sD in DD) {
        const zD = DD[sD];
        if (null !== zD && void 0 !== zD && zD.items)
          for (const DD in zD.items)
            if ((0, pD.o)(zD.items[DD], rD)) return !1
      }
      return !0
    }
  },
  8801: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      f: () => pD
    });
    const pD = 100;

    function sD(DD) {
      let {
        translationKeys: zD = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return DD.map((DD => {
        var wD;
        return null !== (wD = function(DD, zD) {
          if ("string" === typeof DD) return DD;
          const wD = "str" in DD ? DD.str : DD;
          if ("string" === typeof wD) return wD;
          if ("entityName" in wD) return wD.entityName;
          if (zD && "translationKey" in wD) return `{${wD.translationKey}${void 0===wD.params?"":` ${JSON.stringify(wD.params)}`}}`;
          return null
        }(DD, zD)) && void 0 !== wD ? wD : " "
      })).join("")
    }
  },
  8826: () => {},
  8248: (DD, zD, wD) => {
    var pD = {
      "./nintendo/A.svg": 8251,
      "./nintendo/B.svg": 8256,
      "./nintendo/Down.svg": 8260,
      "./nintendo/Home.svg": 8263,
      "./nintendo/LB.svg": 8267,
      "./nintendo/LS.svg": 8273,
      "./nintendo/LT.svg": 8277,
      "./nintendo/Left.svg": 8280,
      "./nintendo/LeftStick.svg": 8284,
      "./nintendo/Menu.svg": 8290,
      "./nintendo/RB.svg": 8294,
      "./nintendo/RS.svg": 8298,
      "./nintendo/RT.svg": 8307,
      "./nintendo/Right.svg": 8315,
      "./nintendo/RightStick.svg": 8321,
      "./nintendo/Up.svg": 8327,
      "./nintendo/View.svg": 8333,
      "./nintendo/X.svg": 8337,
      "./nintendo/Y.svg": 8346,
      "./playstation/A.svg": 8348,
      "./playstation/B.svg": 8351,
      "./playstation/Down.svg": 8360,
      "./playstation/Home.svg": 8368,
      "./playstation/LB.svg": 8373,
      "./playstation/LS.svg": 8376,
      "./playstation/LT.svg": 8379,
      "./playstation/Left.svg": 8386,
      "./playstation/LeftStick.svg": 8389,
      "./playstation/Menu.svg": 8395,
      "./playstation/RB.svg": 8397,
      "./playstation/RS.svg": 8404,
      "./playstation/RT.svg": 8406,
      "./playstation/Right.svg": 8413,
      "./playstation/RightStick.svg": 8420,
      "./playstation/Up.svg": 8428,
      "./playstation/View.svg": 8433,
      "./playstation/X.svg": 8435,
      "./playstation/Y.svg": 8439,
      "./steamdeck/A.svg": 8446,
      "./steamdeck/B.svg": 8454,
      "./steamdeck/Down.svg": 8457,
      "./steamdeck/Home.svg": 8459,
      "./steamdeck/LB.svg": 8468,
      "./steamdeck/LS.svg": 8475,
      "./steamdeck/LT.svg": 8482,
      "./steamdeck/Left.svg": 8491,
      "./steamdeck/LeftStick.svg": 8496,
      "./steamdeck/Menu.svg": 8501,
      "./steamdeck/RB.svg": 8504,
      "./steamdeck/RS.svg": 8512,
      "./steamdeck/RT.svg": 8514,
      "./steamdeck/Right.svg": 8517,
      "./steamdeck/RightStick.svg": 8526,
      "./steamdeck/Up.svg": 8531,
      "./steamdeck/View.svg": 8534,
      "./steamdeck/X.svg": 8541,
      "./steamdeck/Y.svg": 8550,
      "./xbox/A.svg": 8558,
      "./xbox/B.svg": 8562,
      "./xbox/Down.svg": 8571,
      "./xbox/Home.svg": 8575,
      "./xbox/LB.svg": 8577,
      "./xbox/LS.svg": 8584,
      "./xbox/LT.svg": 8586,
      "./xbox/Left.svg": 8588,
      "./xbox/LeftStick.svg": 8596,
      "./xbox/Menu.svg": 8604,
      "./xbox/RB.svg": 8611,
      "./xbox/RS.svg": 8617,
      "./xbox/RT.svg": 8622,
      "./xbox/Right.svg": 8625,
      "./xbox/RightStick.svg": 8630,
      "./xbox/Up.svg": 8635,
      "./xbox/View.svg": 8642,
      "./xbox/X.svg": 8644,
      "./xbox/Y.svg": 8646
    };

    function sD(DD) {
      var zD = KD(DD);
      return wD(zD)
    }

    function KD(DD) {
      if (!wD.o(pD, DD)) {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }
      return pD[DD]
    }
    sD.keys = function() {
      return Object.keys(pD)
    }, sD.resolve = KD, DD.exports = sD, sD.id = 8248
  },
  8251: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8256: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8260: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8263: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8267: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8273: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8277: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8280: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8284: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8290: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8294: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8298: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8307: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8315: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8321: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8327: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8333: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8337: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8346: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8348: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8351: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8360: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8368: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8373: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8376: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8379: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8386: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8389: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8395: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8397: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8404: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8406: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8413: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8420: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8428: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8433: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8435: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8439: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8446: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8454: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8457: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8459: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8468: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8475: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8482: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8491: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8496: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8501: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8504: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8512: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8514: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8517: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8526: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8531: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8534: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8541: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8550: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8558: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8562: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8571: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8575: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8577: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8584: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8586: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8588: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8596: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8604: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8611: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8617: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8622: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8625: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8630: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8635: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8642: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8644: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8646: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);